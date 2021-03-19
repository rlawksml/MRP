import React from 'react';
import styled from 'styled-components';
import { Grid, container } from '@material-ui/core';
import Navigation from '../coponents/Navigation';

export default () => {
  return (
    <>
      {/* <h1>픽(Pick) 페이지</h1> */}
      {/* <Navigation/> */}
      <MainContainer>
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
          <ProductDiv item xs={7} sm={7} md={7} lg={7} xl={7}>
            Image
            <ButtonDiv>
              <NextButton>Next</NextButton>
              <PickButton>Pick</PickButton>
            </ButtonDiv>
          </ProductDiv>
        </Grid>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  // border: 1px solid blue;
  height: 50em;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductDiv = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px 3px #999999;
`;

const ButtonDiv = styled.div`
  position: absolute;
  top: 400px;
  width: inherit;
  height: 100px;
  display: flex;
  justify-content: space-between;
  // border: 1px solid red;
  position: relative;
`;

const NextButton = styled.a`
  position: absolute;
  top: -30px;
  left: 10px;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  // border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f23f57;
  font-family: Roboto;
  font-weight: 400;
  font-size:1.5rem;
  color: white;
  transition: 0.3s;
  opacity: 0.7;
  &:hover{
    opacity: 1;
  }
`;

const PickButton = styled.a`
  position: absolute;
  top: -30px;
  right: 10px;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  color: white;
  // border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #254489;
  font-family: Roboto;
  font-weight: 400;
  font-size:1.5rem;
  opacity: 0.7;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;
