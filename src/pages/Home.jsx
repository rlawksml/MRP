import React from 'react';
import styled from 'styled-components';
// import Navigation from '../coponents/Navigation';
import { Grid, container } from '@material-ui/core';
import LogoImg from '../assets/MRPLOGO.png'
import LogoComponent from '../coponents/Logo'

export default () => {
  return (
    <>
      <MainContainer>
          <LogoComponent/>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  // border: 1px solid blue;
  height: 50em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction : column;
`;
