import React from 'react';
import styled from 'styled-components';
import { Grid, container } from '@material-ui/core';
import CartItems from '../coponents/CartComponent';
import CartImage from '../assets/Cart/1x/outline_shopping_cart_black_24dp.png'
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default () => {
  return (
    <>
    <Container>  
      <MainContainer>
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
          <CartItems/>
        </Grid>
      </MainContainer>
      <Link to="/Cart"><TrashContainer/></Link>
      </Container>
    </>
  );
};

const TrashContainer = styled.div`
background: no-repeat center url(${CartImage});
width: 50px;
height: 50px;
border: 1px solid black;
border-radius : 50px;
margin: 10px;
position: absolute;
bottom: 25px;
right: 25px;
&:hover {
  cursor: pointer ;
  border: 2px solid blue;
}`

const Container = styled.div`
display: flex;
align-items:center;
justify-content: center;
width: 100vw;
height: 90vh;
`

const MainContainer = styled.div`
  padding: 0 10px;
  // border: 1px solid blue;
  height: 100%;
  width: 90vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
