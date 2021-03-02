import React from 'react';
import styled from 'styled-components';
import {Grid} from '@material-ui/core'

export default () => {
  return (
      <NavBar>
        <Grid container spacing={1}>
            <Grid xs={2}><Menus>menu1</Menus></Grid>
            <Grid xs={2}><Menus>menu2</Menus></Grid>
            <Grid xs={2}><Menus>menu3</Menus></Grid>
            <Grid xs={6}>
                <Login>Login/Logout</Login></Grid> 
        </Grid>
    </NavBar>
  );
};

const Menus = styled.a`
    border: 1px solid blue;
    color : gray;
`;

const Login = styled.a`
    float : right;
    top : 0;
    right : 0;
    border: 1px solid blue;
    color : gray;
`;

const NavBar = styled.div`
    border: 1px solid green;
    margin-top: 10px;
    margin-bottom: 10px;
    padding : 20px;
`;
