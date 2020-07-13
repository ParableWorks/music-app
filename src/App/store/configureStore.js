import { createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from '../rootReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = (initialState) => {
  const store = createStore(persistedReducer, composeEnhancers(initialState));
  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
