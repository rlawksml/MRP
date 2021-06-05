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
import Trash from './pages/Trash';
import Account from './pages/Account';
import PickItemList from './coponents/PickItemList';
import Register from './pages/Register';

export default () => (
  <>
    <StyledGlobal />
    <Backgorund>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Account" component={Account} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Pick" component={Pick} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Trash" component={Trash} />
          <Route path="/Test" component={PickItemList} />
          <Route path="/Register" component={Register} />
          <Route path="/">
            {/* <NotFound>
              <NotFountWord>
                페이지 정보를 찾을 수 없습니다.<br></br>
                Page Not Found
              </NotFountWord>{' '}
            </NotFound> */}
          </Route>
        </Switch>
      </BrowserRouter>
    </Backgorund>
    <Footer>
      <a href="https://github.com/rlawksml/MRP.git">
        <p>Github : https://github.com/rlawksml/MRP.git</p>
      </a>
    </Footer>
  </>
);

const Backgorund = styled.div`
  background-color: white;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const NotFound = styled.div`
  background-color : 
  width : 100vh;
  height: 80vw;
  display: flex;
  align-items: center;
  justify-content : center;
`;

const NotFountWord = styled.p`
  color: #3956a5;
  font-family: Roboto;
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
  line-height: 5rem;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  font-size: 1rem;
  font-weight: 400;
  background-color: #7292cc;
  color: white;
  &:hover {
    background-color: #4e6caf;
  }
`;
