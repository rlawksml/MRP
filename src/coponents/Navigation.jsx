import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <NavBar>
      <Grid container justify="flex-start" alignitems="center" spacing={2}>
        <HamMenu item xs={2} sm={2} md={2} lg={2} xl={2}>
          <Menus>
            <Link to="/">menu1</Link>
          </Menus>
        </HamMenu>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          <Menus></Menus>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          <Menus>
            <Link to="/Cart">menu2</Link>
          </Menus>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          <Menus>
            <Link to="/Pick">menu3</Link>
          </Menus>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <Login>
            <Link to="/Login">Login/Logout</Link>
          </Login>
        </Grid>
      </Grid>
    </NavBar>
  );
};

const HamMenu = styled(Grid)`
  width: 100%;
  float: left;
`;

const Menus = styled.a`
  border: 1px solid blue;
  color: black;
`;

const Login = styled.a`
  float: right;
  top: 0;
  right: 0;
  border: 1px solid blue;
  color: black;
`;

const NavBar = styled.div`
  width: 100%;
  height: 60px;
  overflow-x: hidden;
  opacity: 1;
  border: 1px solid green;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
