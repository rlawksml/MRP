import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Grid, container } from '@material-ui/core';
import PickItems from '../coponents/PickItems';
import CartComponent from '../coponents/CartComponent';
import Cart from '../pages/Cart';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Navigation from '../coponents/Navigation';

export default () => {
  const [ItemList, setItemList] = useState([]);
  const [count, setCount] = useState(1);
  const [CartCount, setCartCount] = useState(1);
  const history = useHistory();

  const OnAdd = () => {
    if (ItemList.length === 5) {
      return alert('보관함  초과');
    }
    setItemList((arr) => [
      ...arr,
      {
        Item: (
          <div>
            <CartComponent />
          </div>
        ),
        id: arr.length + 1,
      },
    ]);
    setCount(count + 1);
    setCartCount(CartCount + 1);
  };

  const OnNext = (e) => {
    e.preventDefault();
    setCount(count + 1);
    if (count % 10 === 0) {
      alert('광고 보기');
      setCount(1);
    }
  };

  return (
    <>
      <MainContainer>
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
          <PickItems OnNext={OnNext} OnAdd={OnAdd} count={count} />

          {/* 아이템 리스트가 잘 나오는지 확인할 수 있음 */}
          {/* {ItemList.map((e) => (
            <div key={e.id}> {e.Item}</div>
          ))} */}
        </Grid>
      </MainContainer>

      {/* 카트 컴포넌트로 잘 넘어가는지 확인할 수 있음 */}
      {/* <Cart Items={ItemList} count={count} /> */}
    </>
  );
};

const MainContainer = styled.div`
  height: 50em;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductDiv = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px 3px #999999;
`;

// 카트 스타일드 컴포넌트

const Container = styled.div`
  display: flex;
  border: 1px solid red;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: 90vh;
`;

const Finding = styled.div`
  border: 10px solid black;
  height: 100px;
`;

const CartMainContainer = styled.div`
  padding: 0 10px;
  // border: 1px solid blue;
  height: 100%;
  width: 90vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
