const { Component } = require('react');
const React = require('react');
const styled = require('styled-components');

class LogoPage extends Component {
  state = {
    text: '안녕하세용 웹팹입니다~',
  };
  render() {
    return (
      <>
        <h1>{this.state.text}</h1>
        <div>디자인 안녕~</div>
      </>
    );
  }
}

module.exports = LogoPage;
