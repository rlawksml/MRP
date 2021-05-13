import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Grid, container } from '@material-ui/core';
import PickItems from '../coponents/PickItems';
import CartComponent from '../coponents/CartComponent';
import PickItemList from '../coponents/PickItemList';

export default () => {
  const [ItemList, setItemList] = useState([]);
  const [count, setCount] = useState(0);
  const [CartCount, setCartCount] = useState(0);
  const nextId = useRef(1);

  const OnAdd = (e) => {
    if (CartCount > 5) {
      alert('보관함  초과');
    } else {
      const ItemNumber = {
        id: nextId.current,
      };
      e.preventDefault();
      setItemList([
        ...ItemList,
        {
          Item: <CartComponent />,
          id: ItemNumber.id,
        },
      ]);
      setCount(count + 1);
      setCartCount(CartCount + 1);

      nextId.current += 1;
    }
  };

  const OnNext = (e) => {
    e.preventDefault();
    setCount(count + 1);
    if (count > 10) {
      alert('광고 보기');
      setCount(0);
    }
  };
  return (
    <>
      <MainContainer>
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">

          <PickItems OnNext={OnNext} OnAdd={OnAdd} count={count} />
          <PickItemList count={count}></PickItemList>

        </Grid>
      </MainContainer>

      {/* {false && <Cart ItemList={ItemList} />} */}
      {/* {false && (
        <div>
          {ItemList.map((PickItem) => (
            <PickItemList PickItem={PickItem} key={PickItem.id} />
          ))}
        </div>
      )} */}
    </>
  );
};

const MainContainer = styled.div`
  // border: 1px solid blue;
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
