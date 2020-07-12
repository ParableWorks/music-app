import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/fff" component={() => <div>fff</div>} />
      <Route exact path="/" component={() => <div>Hello World!</div>} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default App;
