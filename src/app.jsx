import React from 'react';
import Home from './pages/Home';
import Navigation from './coponents/Navigation';
import StyledGlobal from './styled/global';
import styled from 'styled-components';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Cart from './pages/Cart';
import Pick from './pages/Pick';
import Contact from './pages/Contact';
import Trash from './pages/Trash'
import Account from './pages/Account'

export default () => (
  <>
    <StyledGlobal />
    <Backgorund>
      <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Account" component={Account}/>
        <Route path="/Cart" component={Cart}/>
        <Route path="/Pick" component={Pick}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Trash" component={Trash} />
        <Route path="/"><NotFound><NotFountWord>
          페이지 정보를 찾을 수 없습니다.<br></br>
          Page Not Found
          </NotFountWord> </NotFound></Route>
      </Switch>
    </BrowserRouter>
    </Backgorund>
  </>
);


const Backgorund = styled.div`
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
