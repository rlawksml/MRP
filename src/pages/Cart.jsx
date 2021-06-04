import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Grid, container } from '@material-ui/core';
import TrashImage from '../assets/Trash/1x/outline_delete_forever_black_36dp.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Trash from './Trash';
import { useLocation } from 'react-router';
import CartComponent from '../coponents/CartComponent';

export default () => {
  const location = useLocation();
  const [ItemList, setItemList] = useState([
    <CartComponent />,
    <CartComponent />,
    <CartComponent />,
    <CartComponent />,
    <CartComponent />,
  ]);

  return (
    <>
      <Container>
        <MainContainer>
          <Grid container spacing={2} direction="row" justify="center" alignItems="center">
            {ItemList.map((e) => (
              <div key={e.index}>{e}</div>
            ))}
          </Grid>
        </MainContainer>
        {/* <Link to="/Trash">
          {false && <Trash DelItemList={DelItemList} />}
          <TrashContainer />
        </Link> */}
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
  align-items: center;
  justify-content: center;
  width: 90vw;
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
