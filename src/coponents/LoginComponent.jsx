import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import {useHistory} from "react-router-dom"

export default () => {
  const [Err, setErr] = useState('')
  const [ID, setID] = useState('')
  const [PW, setPW] = useState('')
  var MakeButton = document.getElementById('Account')
  var NewButton = document.createElement('button')
  NewButton.innerText = "Account"
  
  let history = useHistory();

  const LoginHandler =(e) =>{
    e.preventDefault();
    setID(document.getElementById('id').value);
    setPW(document.getElementById('password').value);
    if(ID === '김진희' && PW ==="123"){
      setErr('Welcome');
      MakeButton.appendChild(NewButton);
      history.push({pathname : "/Account", state :{ID: ID}});
    }else{
      setErr('Invalid')
    }
    
  };


  const format = {
    color : 'red'
  }
  let inputwidth={width:"250px"}; 
  return (
          <>
          <span style={format}> {Err != '' ? Err : ''}</span>
          <form method="post" onSubmit={LoginHandler}>
            <InputForms>
            <LabelSapn>아이디</LabelSapn>
            <input type="text" placeholder="ID" id="id" style={inputwidth}></input>
            </InputForms>
            
            <InputForms>
            <LabelSapn>비밀번호</LabelSapn>
            <input type="password" placeholder="PW" id="password" style={inputwidth}></input>
            </InputForms>
            
            <Google>Google</Google>
            <SubmitButton type="submit" >
              로그인
            </SubmitButton>
            <div id="Account"></div>
          </form>

          </>
  );
};

const InputForms = styled.div`
  border:1px solid blue;
  display:flex;
  justify-content: center;
  height: 30px;
  margin: 10px 0;
`

const LabelSapn = styled.div`
  width : 70px;
  text-align:center;
  border: 1px solid red;
  display:inline-block;
  line-height: 1.8rem;
  margin: 0 5px;
`

const Google = styled.div`
border: 1px solid red;
width: 100%;
height: 50px;
`

const SubmitButton = styled.button`
  postion: float;
  float:right;
  margin: 10px;
`
