import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Grid, container } from '@material-ui/core';
import TrashImage from '../assets/Trash/1x/outline_delete_forever_black_36dp.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Trash from './Trash';

export default () => {
  const [DelItemList, setDelItemList] = useState([]);
  return (
    <>
      <Finding></Finding>
      <Container>
        <MainContainer>
          <Grid container spacing={2} direction="row" justify="center" alignItems="center"></Grid>
        </MainContainer>
        <Link to="/Trash">
          {false && <Trash DelItemList={DelItemList} />}
          <TrashContainer />
        </Link>
      </Container>
    </>
  );
};

const TrashContainer = styled.div`
  background: no-repeat center url(${TrashImage});
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50px;
  margin: 10px;
  position: absolute;
  bottom: 25px;
  right: 25px;
  &:hover {
    cursor: pointer;
    border: 2px solid blue;
  }
`;

const Container = styled.div`
  display: flex;
  border: 1px solid red;
  margin: 10px;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 90vh;
`;

const Finding = styled.div`
  border: 10px solid black;
  height: 100px;
`;

const MainContainer = styled.div`
  padding: 0 10px;
  // border: 1px solid blue;
  height: 100%;
  width: 90vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
