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
        <Route path="/"><NotFound><NotFountWord>
          페이지 정보를 찾을 수 없습니다.<br></br>
          Page Not Found
          </NotFountWord> </NotFound></Route>
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

const NotFound = styled.div`
  background-color : 
  width : 100vh;
  height: 80vw;
  display: flex;
  align-items: center;
  justify-content : center;
`

const NotFountWord = styled.p`
color : #3956A5;
font-family: Roboto;
font-weight: bold;
font-size : 3rem;
text-align:center;
line-height: 5rem;
`
