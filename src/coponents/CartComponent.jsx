import React from 'react';
import styled from 'styled-components';
import { Grid, container } from '@material-ui/core';
import ReactStars from "react-rating-stars-component"

export default () => {
  const ratingChanged = (newRating)=>{
    console.log(newRating)
  }
  
  return (
    <>
          <CartGrid>
            {/* 장바구니 그리드 */}
            <Deletebutton>X</Deletebutton>
            {/* 삭제 버튼 */}
            <ItemBtm>
              {/* 별점 버튼 */}
              <ReactStars
              precision={0.5}
              defaultValue={2.5}
                count={5} size={24}
              activeColor="#ffd700"
              onChange={ratingChanged}
              ></ReactStars>
              {/* react 라이브러리 react rating stars component 사용해서 별점 입력 onchange로 위에 설정해 둔 함수 raringChagned에 값 전달함 */}
            </ItemBtm>
          </CartGrid>
    </>
  );
};


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
  display:flex;
  justify-content:center;
  align-items:center;
  top: 300px;
  transition: 0.3s;
  box-shadow: 5px 5px 10px 3px #999999;
  border-radius: 0 0 10px 10px ;
`;

const Deletebutton = styled.button`
  position: abouslute;
  transform : translate(220px, 8px);
  border-radius: 100%;
  display:flex;
  align-items : center;
  justify-content: center;
  font-size: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  color: #f4f4f4;
  background-color: #7292cc;
  border:0;
  outline:none;
  &:hover {
    background: #254489;
    font-weight: bold;
    color: white;
  }
`;
