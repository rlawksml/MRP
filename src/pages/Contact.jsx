import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';

export default () => {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Text, setText] = useState('')

  const SumbitHandler = (e) => {
    e.preventDefault();
    setText(document.getElementById('msg').value)
    setName(document.getElementById('name').value)
    setEmail(document.getElementById('email').value)
    console.log(Name, Email, Text)
  };
  return (
    <>
      <Form action="" onSubmit={SumbitHandler}>
        <InfoContainer>
          <label htmlFor="name">Name : </label>
          <input type="text" id="name"></input>
        </InfoContainer>
        <InfoContainer>
          <label htmlFor="mail">E-mail : </label>
          <input type="email" id="email"></input>
        </InfoContainer>
        <InfoContainer>
          <label htmlFor="message">Message : </label>
          <Textarea name="message" id="msg" cols="30" rows="10" ></Textarea>
        </InfoContainer>
        <InfoContainer>
          <Submit type="submit" >
            보내기
          </Submit>
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

const Textarea = styled.textarea`
resize : none;
`

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
