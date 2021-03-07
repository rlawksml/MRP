import React from 'react';
import styled from 'styled-components';
import Navigation from '../coponents/Navigation.jsx';
import { Grid, container } from '@material-ui/core';

export default () => {
  return (
    <>
      <Navigation></Navigation>
      <MainContainer>
        <Grid spacing={1} container direction="row" justify="center" alignItems="center">
          <Logo></Logo>
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

const Logo = styled.div`
  border: 1px solid Red;
  height: 100px;
  width: 250px;
`;
