import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import configureStore from './store/configureStore';
import createMiddleware from './store/createMiddleware';

import LevelHub from '../Pages/LevelHub/levelHub';
import Level from '../Pages/Level/Level';
import FileNotFound from '../Pages/UniversalComponents/404';
import Homepage from '../Pages/Homepage/Homepage';
// import footer from '../Pages/UniversalComponents/footer';

export const { store, persistor } = configureStore(createMiddleware);

const App = () => (
  <div>
    {/* <header /> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/footer" component={footer} /> */}
            <Route path="/level/:levelNumber" component={Level} />
            <Route path="/levelhub" component={LevelHub} />
            <Route
              exact
              path="/"
              component={() => <Link to="/levelhub">Hello World!</Link>}
            />
            <Redirect to="/" />
            <Route path="/404" component={FileNotFound} />
            <Route exact path="/" component={Homepage} />
            <Redirect to="/404" />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
    {/* <footer /> */}
  </div>
);

export default App;
