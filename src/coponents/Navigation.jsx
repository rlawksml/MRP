import React from 'react';
import styled from 'styled-components';
import {Grid} from '@material-ui/core'

export default () => {
  return (
      <NavBar>
        <Grid container justify="flex-start" alignitems="center" spacing={2}>
            <HamMenu item xs={2} sm={2} md={2} lg={2} xl={2}><Menus>menu1</Menus></HamMenu>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}><Menus>menu2</Menus></Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}><Menus>menu3</Menus></Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}><Login>Login/Logout</Login></Grid> 
        </Grid>
    </NavBar>
  );
};



const HamMenu = styled(Grid)`
  width:100%;
  float:left;
`;

const Menus = styled.a`
    border: 1px solid blue;
    color : black;
`;

const Login = styled.a`
    float : right;
    top : 0;
    right : 0;
    border: 1px solid blue;
    color : black;
`;

const NavBar = styled.div`
    width: 100%;
    height: 60px;
    overflow-x : hidden;
    opacity: 1;
    border: 1px solid green;
    margin-top: 10px;
    margin-bottom: 10px;
    padding : 20px;
    align-items:center;
    justify-content:center;
    display: flex;
`;
