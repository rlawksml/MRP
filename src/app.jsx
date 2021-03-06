import React from 'react';
import Home from './pages/Home.jsx';
import Navigation from './coponents/Navigation.jsx'
import StyledGlobal from './styled/global.js'
import { BrowserRouter, Router, Route, Switch, Link} from 'react-router-dom'

import Login from './pages/Login.jsx'
import Cart from './pages/Cart.jsx'
import Pick from './pages/Pick.jsx'
import Contact from './pages/Contact.jsx'

export default () => (
    <>
      <StyledGlobal />
      <Navigation />
      <Home />
      <Login />
      <Cart />
      <Pick />
      <Contact />
    </>
  );
  