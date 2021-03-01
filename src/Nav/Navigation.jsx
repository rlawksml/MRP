const React = require('react');
const { useState, Component } = React;

const Navigation = () => {
  const [text, setText] = useState('네비게션바입니다');
  return (
    <>
      <div>
        <Title>{text}</Title>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
      </div>
    </>
  );
};

module.exports = Navigation;
