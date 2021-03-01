const { Component } = require('react');
const React = require('react');
const LogoPage = require('./LogoPage.jsx');
const Navigation = require('./Nav/Navigation.jsx');

class Home extends Component {
  state = {
    text: '안녕하세용 웹팹입니다~',
  };
  render() {
    return (
      <>
        <Navigation />
        <LogoPage />
      </>
    );
  }
}

module.exports = Home;
