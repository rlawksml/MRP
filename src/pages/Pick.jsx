import React from 'react';
import styled from 'styled-components';
import { Grid, container } from '@material-ui/core';
import Navigation from '../coponents/Navigation.jsx';

export default () => {
  return (
    <>
      {/* <h1>픽(Pick) 페이지</h1> */}
      {/* <Navigation/> */}
      <MainContainer>
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
          <ProductDiv item xs={7} sm={7} md={7} lg={7} xl={7}>
            무신사 상품
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
  color: red;
  border: 1px solid blue;
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
  border: 1px solid black;
`;

const ButtonDiv = styled.div`
  position: absolute;
  top: 400px;
  width: inherit;
  height: 100px;
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
`;

const NextButton = styled.a`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PickButton = styled.a`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`;
