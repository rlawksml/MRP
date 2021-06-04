import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import StyledGlobal from '../styled/global';
import CartImg from '../assets/Icons/2x/Cart_white.png';
import CheckImg from '../assets/Icons/2x/Check_white.png';

export default () => {
  return (
    <>
      <StyledGlobal />
      <NavContainer>
        <NavBar>
          <Grid container justify="flex-start" alignitems="center" spacing={1}>
            <HamMenu item xs={2} sm={2} md={2} lg={2} xl={2}>
              <Menus>
                <Link to="/">Home</Link>
              </Menus>
            </HamMenu>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
              <CartMenus>
                <Link to="/Cart">Cart</Link>
              </CartMenus>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
              <PickMenus>
                <Link to="/Pick">Pick</Link>
              </PickMenus>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
              <Menus>
                <Link to="/Contact">Contact</Link>
              </Menus>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <Login>
                <Link to="/Login">Login / Sign Up</Link>
              </Login>
            </Grid>
          </Grid>
        </NavBar>
      </NavContainer>
    </>
  );
};

const CheckPng = styled.img.attrs({
  src: CheckImg,
})`
  width: 100%;
  height: 100%;
`;

const CartPng = styled.img.attrs({
  src: CartImg,
})`
  width: 100%;
  height: 100%;
`;

const HamMenu = styled(Grid)`
  width: 100%;
  float: left;
`;

const CartMenus = styled.li`
list-style: none;
font-size: 1.3rem;
font-weight: 400;
color: white;
transition: 0.3s;
&:hover {
  background: #white;
  font-weight: bold;
  color: black;
}  
`
const PickMenus = styled.li`
list-style: none;
font-size: 1.3rem;
font-weight: 400;
color: white;
transition: 0.3s;
&:hover {
  background: #white;
  font-weight: bold;
  color: black;
}  
`

const Menus = styled.li`
  list-style: none;
  font-size: 1.3rem;
  font-weight: 400;
  color: white;
  transition: 0.3s;
  &:hover {
    background: #white;
    font-weight: bold;
    color: black;
  }
  // &:active {
  //   width: 100%;
  //   height: 1px;
  //   border-bottom : 1px solid white;
  // }
`;

const Login = styled.li`
  list-style: none;
  float: right;
  font-weight: 400;
  font-size: 1.3rem;
  color: white;
  transition: 0.3s;
  &:hover {
    background: #white;
    font-weight: bold;
    color: black;
  }
`;

const NavBar = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 5rem;
  align-items: center;
  justify-content: center;
  display: flex;
  overflow: hidden;
  background-color: #7292cc;
  opacity: 0.9;
`;

const NavContainer = styled.div`
  background-color: #7292cc;
  width: 100%;
  height: 70px;
  font-family: Roboto;
  font-weight: 100;
  box-shadow: 1px 1px 10px 1px #4e6caf;
`;
