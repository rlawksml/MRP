import React from 'react';
import styled from 'styled-components';
import { Grid, container } from '@material-ui/core';
import CartItems from '../coponents/CartComponent';

export default () => {
  return (
    <>
    <Container>  
      <MainContainer>
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
          <CartItems/>
          <CartItems/>
          <CartItems/>
          <CartItems/>
          <CartItems/>
        </Grid>
      </MainContainer>
      </Container>
    </>
  );
};

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
