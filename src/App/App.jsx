import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Test from '../Pages/Test/Test';

import configureStore from './store/configureStore';
import createMiddleware from './store/createMiddleware';

const { store, persistor } = configureStore(createMiddleware);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Switch>
          <Route path="/fff" component={() => <div>fff</div>} />
          <Route path="/test" component={Test} />
          <Route exact path="/" component={() => <div>Hello World!</div>} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
