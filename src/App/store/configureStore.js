import { createStore, compose, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import soundPlayerReducer from '../../lib/soundPlayer/reducers';

// export default rootReducer;

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['soundPlayer'],
};

const rootReducer = combineReducers({
  test: (state = {}) => state,
  soundPlayer: soundPlayerReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = (initialState) => {
  const store = createStore(persistedReducer, composeEnhancers(initialState));
  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
