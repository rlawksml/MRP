import React from 'react';
import styled from 'styled-components';
import { Grid, container } from '@material-ui/core';
import Navigation from '../coponents/Navigation';

export default () => {
  return (
    <>
      <br />
      {/* <h1>로그인페이지</h1> */}
      {/* <Navigation /> */}
      <MainContainer>
        <LoginGrid spacing={1} container direction="column" justify="center" alignItems="center">
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <LoginBox>ID</LoginBox>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <LoginBox>PW</LoginBox>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <LoginBox>GOOGLE</LoginBox>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Finding>회원가입</Finding>
            <Finding>아이디/비밀번호 찾기</Finding>
          </Grid>
        </LoginGrid>
      </MainContainer>
    </>
  );
};

const Finding = styled.a`
  border: 1px solid red;
  width: 300px;
  height: 100px;
`;

const LoginBox = styled.div`
  border: 1px solid red;
  width: 500px;
  height: 100px;
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

const LoginGrid = styled(Grid)``;

const LogoGrid = styled(Grid)`
  border: 1px solid Red;
  height: 100px;
  width: 250px;
`;
