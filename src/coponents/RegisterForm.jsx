import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const [Err, setErr] = useState('');
  const [ID, setID] = useState('');
  const [PW, setPW] = useState('');
  const [PW2, setPW2] = useState('');
  const [Email, setEmail] = useState('');
  var MakeButton = document.getElementById('Account');
  var NewButton = document.createElement('button');
  NewButton.innerText = 'Account';

  let history = useHistory();

  const RegisterHandler = (e) => {
    e.preventDefault();
    setID(document.getElementById('id').value);
    setPW(document.getElementById('password').value);
    setPW2(document.getElementById('password2').value);
    setEmail(document.getElementById('email').value);

    if (PW2 === PW && Email.includes('@') && Email.includes('.com')) {
      alert(Id, '가입 완료');
    } else if (false === (Email.includes('@') && Email.includes('.com'))) {
      alert('이메일을 정확히 입력해주세요');
    } else {
      alert('비밀번호가 다릅니다.');
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
          <h2>Register</h2>
        </LoginDiv>
        <form method="post" onSubmit={RegisterHandler}>
          <InputForms>
            <LabelSapn>
              이메일
              <input type="text" placeholder="E-mail" id="email" style={inputwidth}></input>
            </LabelSapn>
            <LabelSapn>
              아이디
              <input type="text" placeholder="ID" id="id" style={inputwidth}></input>
            </LabelSapn>
            <LabelSapn>
              비밀번호
              <input type="password" placeholder="PW" id="password" style={inputwidth}></input>
            </LabelSapn>

            <LabelSapn>
              비밀번호 확인
              <input
                type="password"
                placeholder="PW 확인"
                id="password2"
                style={inputwidth}
              ></input>
            </LabelSapn>
          </InputForms>

          <ButtonDiv>
            <SubmitButton type="submit">가입하기</SubmitButton>
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
  //   border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //   transform: translate(10vw, 0);
  height: 230px;
`;

const LabelSapn = styled.div`
  //   border: 1px solid red;
  width: 250px;
  height: 60px;
  display: block;
  padding: 7px 0;
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
  postion: float;
  float: right;
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
  transform: translate(-5vw, 50px);
  cursor: pointer;
`;

const ButtonDiv = styled.div`
  display: flex;
  transform: translate(0, 50px);
  align-items: center;
  justify-content: center;
  //   border: 1px solid red;
`;

const LoginDiv = styled.div`
  //   border: 1px solid red;
  font-family: Roboto;
  width: 100%;
  height: 25%;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7292cc;
`;
