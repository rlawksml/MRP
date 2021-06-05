import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Grid, container } from '@material-ui/core';
import TrashImage from '../assets/Trash/1x/outline_delete_forever_black_36dp.png';
import Trash from './Trash';
import ReactStars from 'react-rating-stars-component';

export default () => {
  const [count, setCount] = useState(1);

  const onCountCheck = (e) => {
    // e.preventDefault();
    setCount(count + 1);
  };

  const CartCard = () => {
    const ratingChanged = (newRating) => {
      console.log(newRating);
    };
    return (
      <>
        <CartGrid>
          {/* 장바구니 그리드 */}
          <Deletebutton
            onClick={() => {
              onCountCheck();
              onDelete(count);
            }}
          >
            X
          </Deletebutton>
          {/* 삭제 버튼 */}
          <ItemBtm>
            {/* 별점 버튼 */}
            <ReactStars
              precision={0.5}
              defaultValue={2.5}
              count={5}
              size={24}
              activeColor="#ffd700"
              onChange={ratingChanged}
            ></ReactStars>
            {/* react 라이브러리 react rating stars component 사용해서 별점 입력 onchange로 위에 설정해 둔 함수 raringChagned에 값 전달함 */}
          </ItemBtm>
        </CartGrid>
      </>
    );
  };

  const [ItemList, setItemList] = useState([
    { Item: <CartCard />, id: 1 },
    { Item: <CartCard />, id: 2 },
    { Item: <CartCard />, id: 3 },
    { Item: <CartCard />, id: 4 },
    { Item: <CartCard />, id: 5 },
  ]);

  const onDelete = (id) => {
    const newList = ItemList.filter((ItemList) => ItemList.id !== id);
    setItemList(newList);
  };

  return (
    <>
      <Container>
        <MainContainer>
          <Grid container spacing={2} direction="row" justify="center" alignItems="center">
            {ItemList.map((Item) => (
              <div key={Item.id}>{Item.Item}</div>
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

const CartGrid = styled(Grid)`
  position: relative;
  width: 250px;
  height: 300px;
  margin: 2rem 10px;
  box-shadow: 5px 5px 10px 3px #999999;
  border-radius: 10px 10px 0 0;
`;

const ItemBtm = styled.div`
  position: absolute;
  top: 250px;
  width: 250px;
  height: 50px;
  background-color: #3956a5;
  opacity: 0.85;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 300px;
  transition: 0.3s;
  box-shadow: 5px 5px 10px 3px #999999;
  border-radius: 0 0 10px 10px;
`;

const Deletebutton = styled.button`
  position: abouslute;
  transform: translate(220px, 8px);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  color: #f4f4f4;
  background-color: #7292cc;
  border: 0;
  outline: none;
  &:hover {
    background: #254489;
    font-weight: bold;
    color: white;
  }
`;
