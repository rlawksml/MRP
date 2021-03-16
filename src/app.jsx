import React from 'react';
import Home from './pages/Home';
import Navigation from './coponents/Navigation';
import StyledGlobal from './styled/global';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Cart from './pages/Cart';
import Pick from './pages/Pick';
import Contact from './pages/Contact';

export default () => (
  <>
    <StyledGlobal />
    <Backgorund>
    <Router>
      <Navigation />
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
    </Backgorund>
  </>
);


const Backgorund = styled.body`
  background-color: white;
  height : 100vh;
  width: 100%;
  overflow-x:hidden;
`;
