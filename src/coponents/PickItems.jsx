import React from 'react';
import styled from 'styled-components';

export default ({ OnNext, OnAdd }) => {
  return (
    <>
      <ProductDiv item xs={7} sm={7} md={7} lg={7} xl={7}>
        {/* <h1> {count}</h1> */}
        <ButtonDiv>
          <NextButton onClick={OnNext}>Next</NextButton>
          <PickButton onClick={OnAdd}>Pick</PickButton>
        </ButtonDiv>
      </ProductDiv>
      {false && <Cart state={ItemList} />}
    </>
  );
};

const ProductDiv = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px 3px #999999;
`;

const ButtonDiv = styled.div`
  position: absolute;
  top: 400px;
  width: inherit;
  height: 100px;
  display: flex;
  justify-content: space-between;
  // border: 1px solid red;
  position: relative;
`;

const NextButton = styled.li`
  list-style: none;
  position: absolute;
  top: -30px;
  left: 10px;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  // border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f23f57;
  font-family: Roboto;
  font-weight: 400;
  font-size: 1.5rem;
  color: white;
  transition: 0.3s;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

const PickButton = styled.li`
  list-style: none;
  position: absolute;
  top: -30px;
  right: 10px;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  color: white;
  // border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #254489;
  font-family: Roboto;
  font-weight: 400;
  font-size: 1.5rem;
  opacity: 0.7;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;
