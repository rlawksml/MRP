import React from 'react';
import Home from './pages/Home.jsx';
import Navigation from './coponents/Navigation.jsx';
import StyledGlobal from './styled/global.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login.jsx';
import Cart from './pages/Cart.jsx';
import Pick from './pages/Pick.jsx';
import Contact from './pages/Contact.jsx';

export default () => (
  <>
    <StyledGlobal />
    {/* <Navigation /> */}
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/Login">
          <Login></Login>
        </Route>
        <Route path="/Cart">
          <Cart></Cart>
        </Route>
        <Route path="/Pick">
          <Pick></Pick>
        </Route>
        <Route path="/Contact">
          <Contact></Contact>
        </Route>
        <Route path="/">Not Found</Route>
        {/* <Login />
        <Cart />
        <Pick />
        <Contact /> */}
      </Switch>
    </Router>
  </>
);
