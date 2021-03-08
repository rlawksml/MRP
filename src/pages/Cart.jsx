import React from 'react';
import styled from 'styled-components';
import { Grid, container } from '@material-ui/core';
import Navigation from '../coponents/Navigation.jsx';

export default () => {
  return (
    <>
      <h1>카트(Favorite) 페이지</h1>
      {/* <Navigation /> */}
      <MainContainer>
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
          <CartGrid>
            Cart
            <Deletebutton>X</Deletebutton>
            <LikeMark>
              <a>☆☆☆☆☆</a>
            </LikeMark>
          </CartGrid>
          <CartGrid>
            Cart
            <Deletebutton>X</Deletebutton>
            <LikeMark>
              <a>☆☆☆☆☆</a>
            </LikeMark>
          </CartGrid>
          <CartGrid>
            Cart
            <Deletebutton>X</Deletebutton>
            <LikeMark>
              <a>☆☆☆☆☆</a>
            </LikeMark>
          </CartGrid>
          <CartGrid>
            Cart
            <Deletebutton>X</Deletebutton>
            <LikeMark>
              <a>☆☆☆☆☆</a>
            </LikeMark>
          </CartGrid>
          <CartGrid>
            Cart
            <Deletebutton>X</Deletebutton>
            <LikeMark>
              <a>☆☆☆☆☆</a>
            </LikeMark>
          </CartGrid>
        </Grid>
      </MainContainer>
    </>
  );
};

const CartGrid = styled(Grid)`
  position: relative;
  width: 250px;
  height: 300px;
  border: 1px solid black;
`;

const LikeMark = styled.div`
  position: absolute;
  top: 250px;
  width: 250px;
  height: 50px;
  border: 1px solid red;
`;

const MainContainer = styled.div`
  color: red;
  border: 1px solid blue;
  height: 50em;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Deletebutton = styled.button`
  border: 1px solid red;
  width: 20px;
  height: 20px;
  float: right;
  top: 0;
  right: 0;
`;
