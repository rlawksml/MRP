import * as React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';
import 'fontsource-roboto';
import { randomInt } from 'mathjs';
import { Redirect } from 'react-router';
import { isBrowser } from 'react-device-detect';
import './Home.css';

const Home = () => {
    return (
            <>
                    <div className="container">
                        <div className="GNB">
                            <a href="#">Favorite</a>
                            <a href="#">Pick</a>
                            <a href="#" id="login">Login</a>
                        </div>
                    </div>
                    <div className="SideBar">
                        <div className="S-GNB">
                            <li></li>
                            <a href="#">Home</a>
                            <a href="#">About</a>
                        </div>
                    </div>

            </>
    );
    }

export default Home;



