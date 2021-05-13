import React from 'react';
import styled from 'styled-components';

function PickItemList({ count }) {
  return (
    <>
      <MainContainer>
        <h2>Test</h2>
        <Test>{count}</Test>
      </MainContainer>
    </>
  );
}

export default PickItemList;

const MainContainer = styled.div`
  // border: 1px solid blue;
  height: 50em;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Test = styled.div`
  border: 1px solid red;
  font-size: 100px;
  height: 100px;
  width: 100px;
`;
