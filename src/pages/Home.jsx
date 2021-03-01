import React from 'react';
import styled from 'styled-components';

export default () => {
  return (
    <div>
      <Title>안녕하세요</Title>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <div>웹팩입니다</div>
    </div>
  );
};

const Title = styled.div`
  color: red;
  border: 1px solid blue;
`;
