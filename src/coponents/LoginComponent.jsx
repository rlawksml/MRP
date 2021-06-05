import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginImg from '../assets/Icons/outline_badge_black_24dp.png';
import { Link } from 'react-router-dom';
import Register from '../pages/Register';

export default () => {
  const [Err, setErr] = useState('');
  const [ID, setID] = useState('');
  const [PW, setPW] = useState('');
  var MakeButton = document.getElementById('Account');
  var NewButton = document.createElement('button');
  NewButton.innerText = 'Account';

  let history = useHistory();

  const LoginHandler = (e) => {
    e.preventDefault();
    setID(document.getElementById('id').value);
    setPW(document.getElementById('password').value);
    if (ID === '김진희' && PW === '123') {
      setErr('Welcome');
      MakeButton.appendChild(NewButton);
      history.push({ pathname: '/Account', state: { ID: ID } });
    } else {
      setErr(alert('아이디 또는 비밀번호가 틀렸습니다.'));
    }
  };

  const format = {
    color: 'red',
  };
  let inputwidth = { width: '250px' };

  return (
    <>
      <Containerdiv>
        <span style={format}> {Err != '' ? Err : ''}</span>
        <LoginDiv>
          <h2>Login</h2>
        </LoginDiv>
        <form method="post" onSubmit={LoginHandler}>
          <InputForms>
            <LabelSapn>아이디</LabelSapn>
            <input type="text" placeholder="ID" id="id" style={inputwidth}></input>
          </InputForms>

          <InputForms>
            <LabelSapn>비밀번호</LabelSapn>
            <input type="password" placeholder="PW" id="password" style={inputwidth}></input>
          </InputForms>
          <ButtonDiv>
            <SubmitButton type="submit">로그인</SubmitButton>

            <Link to="/Register">
              <RegisterButton>회원가입</RegisterButton>
            </Link>
          </ButtonDiv>
          <div id="Account"></div>
        </form>
      </Containerdiv>
    </>
  );
};

const Containerdiv = styled.div`
  width: 60%;
  height: 100%;
  transform: translate(40%, 0);
  box-shadow: 1px 1px 10px 1px #4e6caf;
`;

const InputForms = styled.div`
  // border: 1px solid blue;
  display: flex;
  justify-content: center;
  height: 30px;
  margin: 10px 0;
`;

const LabelSapn = styled.div`
  width: 70px;
  text-align: center;
  // border: 1px solid red;
  display: inline-block;
  line-height: 1.8rem;
  margin: 0 5px;
`;

const Google = styled.div`
  // border: 1px solid red;
  width: 100%;
  height: 50px;
`;

const SubmitButton = styled.button`
  postion: float;
  float: right;
  margin: 10px;
  width: 60%;
  height: 25px;
  background-color: #7292cc;
  color: white;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: bold;
  outline: 0;
  border: 0;
  box-shadow: 1px 1px 10px 1px #4e6caf;
  cursor: pointer;
`;
const RegisterButton = styled.button`
  postion: block;
  margin: 10px;
  padding-top: 7px;
  width: 65px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0);
  color: #7292cc;
  font-family: Roboto;
  font-size: 0.8rem;
  font-weight: bold;
  outline: 0;
  border: 0;
  border-bottom: 1px solid #7292cc;
  cursor: pointer;
`;

const ButtonDiv = styled.div`
  display: flex;
  transform: translate(0, 70px);
  align-items: center;
  justify-content: center;
`;

const LoginDiv = styled.div`
  // border: 1px solid red;
  font-family: Roboto;
  width: 100%;
  height: 50%;
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7292cc;
`;
