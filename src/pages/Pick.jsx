import React from 'react';
import styled from 'styled-components';
import { Grid, container } from '@material-ui/core';
import pickItems from '../coponents/PickItems'
import PickItems from '../coponents/PickItems';

export default () => {
  return (
    <>
      {/* <h1>픽(Pick) 페이지</h1> */}
      {/* <Navigation/> */}
      <MainContainer>
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
          <PickItems/>
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
