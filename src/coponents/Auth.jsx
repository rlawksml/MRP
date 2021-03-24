import React from 'react';
import axios from 'axios';

export default () => {
  const login = async (id, password) => {
    const { data } = await axios.post('http://1.251.141.221:1338/auth/local', {
      identifier: id,
      password: password,
    })
    console.log(data);
  }
  login('lks9304','rudtn3');
}