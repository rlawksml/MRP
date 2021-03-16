import React from 'react';
import styled from 'styled-components';
// import Navigation from '../coponents/Navigation';
import { Grid, container } from '@material-ui/core';
import LogoImg from '../assets/MRPLOGO.png'

export default () => {
  return (
    <>
      {/* <Navigation/> */}
      <MainContainer>
        {/* <Grid spacing={1} container direction="row" justify="center" alignItems="center"> */}
          <a>
            <Logo><LogoPng></LogoPng></Logo>
          </a>
            <UnderLogo>
              <LogoWord>Musinsa Random</LogoWord>
              <BlueLogoWord>Picker</BlueLogoWord>
            </UnderLogo>
 
        {/* </Grid> */}
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

const Logo = styled.div`
  // border: 1px solid Red;
  height: 100px;
  width: 250px;
`;

const UnderLogo = styled.div`
  // border: 1px solid Red;
  height: 100px;
  width: 300px;
  position: relative;
`

const LogoWord = styled.a`
  color : #1d1d1f;
  font-size: 2rem;
  position: absolute;
  top: 0;
  // left : -8rem;
  padding-top: 1rem
`

const BlueLogoWord = styled.a`
  padding-left: 10px;
  color: #0024d3;
  font-size: 2rem;
  position: absolute;
  font-weight:bold;
  top: 35px;
  left : 13rem;
  padding-top: 1rem
`

const LogoPng = styled.img.attrs({
  src: LogoImg,
})`
  width: 100%;
  height: 100%;
`