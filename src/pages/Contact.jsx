import React from 'react';
import styled from 'styled-components';

export default () => {
  const Sumbit = () => {
    console.log('hello');
  };
  return (
    <>
      <Form action="">
        <InfoContainer>
          <label htmlFor="name">Name : </label>
          <input type="text"></input>
        </InfoContainer>
        <InfoContainer>
          <label htmlFor="mail">E-mail : </label>
          <input type="email"></input>
        </InfoContainer>
        <InfoContainer>
          <label htmlFor="message">Message : </label>
          <textarea name="message" id="msg" cols="30" rows="10"></textarea>
        </InfoContainer>
        <InfoContainer>
          {/* <Submit type="submit" onClick={Submit}>
            보내기
          </Submit> */}
          <button type="submit" onClick={Submit}></button>
        </InfoContainer>
      </Form>
      <Footer>
        <a href="https://github.com/rlawksml/MRP.git">
          <p>Github : https://github.com/rlawksml/MRP.git</p>
        </a>
      </Footer>
    </>
  );
};

const InfoContainer = styled.div`
  // border: 1px dashed black;
  margin: 10px;
  width: 300px;
`;

const Submit = styled.button`
  position: relative;
  top: 0px;
  right: -180px;
`;

const Form = styled.form`
  border: 1px solid red;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: roboto;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  font-size: 1rem;
  font-weight: 400;
  background-color: #7292cc;
  color: white;
  &:hover {
    background-color: #4e6caf;
  }
`;
