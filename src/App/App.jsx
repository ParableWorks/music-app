import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import Test from '../Pages/Test/Test';
import LevelHub from '../Pages/LevelHub/LevelHub';
import Level from '../Pages/Level/Level';
// import footer from '../Pages/UniversalComponents/footer';

import configureStore from './store/configureStore';
import createMiddleware from './store/createMiddleware';

const { store, persistor } = configureStore(createMiddleware);

const App = () => (
  <div>
    {/* <header /> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/footer" component={footer} /> */}
            <Route path="/level/:levelType/:levelNumber" component={Level} />
            <Route path="/levelhub" component={LevelHub} />
            <Route path="/test" component={Test} />
            <Route exact path="/" component={() => <a href="/levelhub">Hello World!</a>} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
    {/* <footer /> */}
  </div>
);

export default App;
