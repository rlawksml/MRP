import React from 'react';
import styled from 'styled-components';
import { useHistory} from 'react-router-dom'
import {useLocation} from "react-router"


export default () => {
  let history = useHistory();
  let inputwidth={width:"250px"}; 
  const LogoutHandler = ()=>{
    history.push("/Login")
  }
  const location = useLocation();
  const id = location.state.ID;
  return (
    <>
      <MainContainer>
        <Formsdiv>
          <form>
            <div>Welcome! {id}</div>
            <button type="submit" onClick={LogoutHandler}>로그아웃</button>
          </form>
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