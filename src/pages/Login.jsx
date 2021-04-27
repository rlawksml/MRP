import React from 'react';
import styled from 'styled-components';
import LoginForms from '../coponents/LoginComponent'

export default () => {

  let inputwidth={width:"250px"}; 
  return (
    <>
      <MainContainer>
        <Formsdiv>
          <LoginForms/>
        </Formsdiv>
      </MainContainer>
    </>
  );
};
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction : column;
  border: 1px solid red;
  height: 50em;
  width: 100%;
  overflow: hidden;

`;
const Formsdiv = styled.div`
  border: 1px solid red;
  height: 50vh;
  width: 50vw;

`