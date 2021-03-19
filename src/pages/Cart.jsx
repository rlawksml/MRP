import React from 'react';
import styled from 'styled-components';
import { Grid, container } from '@material-ui/core';
import ReactStars from "react-rating-stars-component"

export default () => {
  // 레이팅 값 받아오기
  // 함수는 return이 아닌 return 위 render 영역에 선언함
  const ratingChanged = (newRating)=>{
    console.log(newRating)
  }
  return (
    <>
    <Container>  
      <MainContainer>
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
          <CartGrid>
            {/* 장바구니 그리드 */}
            <Deletebutton>X</Deletebutton>
            {/* 삭제 버튼 */}
            <LikeMark>
              {/* 별점 버튼 */}
              <ReactStars count={5} size={24}
              activeColor="#ffd700"
              onChange={ratingChanged}
              ></ReactStars>
              {/* react 라이브러리 react rating stars component 사용해서 별점 입력 onchange로 위에 설정해 둔 함수 raringChagned에 값 전달함 */}
            </LikeMark>
          </CartGrid>
          <CartGrid>
            <Deletebutton>X</Deletebutton>
            <LikeMark>
            <ReactStars count={5} size={24}
              activeColor="#ffd700"
              ></ReactStars>
            </LikeMark>
          </CartGrid>
          <CartGrid>
            <Deletebutton>X</Deletebutton>
            <LikeMark>
            <ReactStars count={5} size={24}
              activeColor="#ffd700"
              ></ReactStars>
            </LikeMark>
          </CartGrid>
          <CartGrid>
            <Deletebutton>X</Deletebutton>
            <LikeMark>
            <ReactStars count={5} size={24}
              activeColor="#ffd700"
              ></ReactStars>
            </LikeMark>
          </CartGrid>
          <CartGrid>

            <Deletebutton>X</Deletebutton>
            <LikeMark>
            <ReactStars count={5} size={24}
              activeColor="#ffd700"
              ></ReactStars>
            </LikeMark>
          </CartGrid>
        </Grid>
      </MainContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
display: flex;
align-items:center;
justify-content: center;
width: 100vw;
height: 90vh;
`

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

const LikeMark = styled.div`
  color: white;
  position: absolute;
  top: 250px;
  width: 250px;
  height: 50px;
  background-color: #3956a5;
  opacity: 0.85;
  display:flex;
  justify-content:center;
  align-items:center;
  position: absolute;
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
  border:none;
  outline:  0;
  &:hover {
    background: #254489;
    font-weight: bold;
    color: white;
  }
`;
