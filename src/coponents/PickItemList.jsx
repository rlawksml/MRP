import React, { useEffect } from 'react';
import styled from 'styled-components';

export default ({ state }) => {
  return (
    <>
      <MainContainer>
        <h2>Test</h2>
        <h1>{state}</h1>
        <h2>Test</h2>
      </MainContainer>
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

// const Test = styled.div`
//   border: 1px solid red;
//   font-size: 100px;
//   height: 100px;
//   width: 100px;
// `;
