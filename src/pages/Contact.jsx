import React from 'react';
import styled from 'styled-components';
import { Grid, container } from '@material-ui/core';
import Navigation from '../coponents/Navigation';

export default () => {
  return (
    <>
      {/* <h1>Contact(개발자) 페이지</h1> */}
      {/* <Navigation /> */}
      <MainContainer>
        <SectionContain
          item
          xs={12}
          sm={6}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <DevDiv1>
            <h3>개발자</h3>
          </DevDiv1>
          <DevDiv2>
            <h3>개발자</h3>
          </DevDiv2>
        </SectionContain>

        <SectionContain
          item
          xs={12}
          sm={6}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <InfoContainer>
            <NameDiv>이름</NameDiv>
            <PhoneDiv>연락처</PhoneDiv>
            <EmailDiv>이메일</EmailDiv>
          </InfoContainer>
          <TextContainer>
            <TextDiv>내용</TextDiv>
            <SubmitDiv>보내기</SubmitDiv>
          </TextContainer>
        </SectionContain>
      </MainContainer>
    </>
  );
};

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

const DevDiv1 = styled.div`

  box-shadow: 2px 2px 10px 2px #7292cc;
  border-radius: 100%;
  height: 200px;
  width: 200px;
  margin-right: 50px;
  transition: 0.3s;
  &:hover {
    background-color: #c4c5c6;
  }
`;
const DevDiv2 = styled.div`

  box-shadow: 2px 2px 10px 2px #7292cc;
  border-radius: 100%;
  height: 200px;
  width: 200px;
  margin-right: 15px;
  transition: 0.3s;
  &:hover {
    background-color: #c4c5c6;
  }
`;

const SectionContain = styled(Grid)`

  border: 1px solid red;
  height: 40em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 100px;
  border: 1px dashed black;
  width: 80%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextContainer = styled.div`
  position: absolute;
  top: 200px;
  border: 1px dashed black;
  width: 80%;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

const NameDiv = styled.div`
  border: 1px solid blue;
  width: 100%;
  height: 25px;
  padding: 5px 0;
`;

const PhoneDiv = styled.div`
  border: 1px solid blue;
  width: 100%;
  height: 25px;
  padding: 5px 0;
`;
const EmailDiv = styled.div`
  border: 1px solid blue;
  width: 100%;
  height: 25px;
  padding: 5px 0;
`;

const TextDiv = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 200px;
  padding: 5px;
`;

const SubmitDiv = styled.div`
  position: absolute;
  top: 250px;
  right: 0px;
  border: 1px solid red;
  width: 70px;
  height: 50px;
  padding: 5px;
`;
