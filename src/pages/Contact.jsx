import React from 'react';
import styled from 'styled-components';
import {Grid , container} from '@material-ui/core'
import Navigation from '../coponents/Navigation.jsx'

export default () => {
  return (
    <>
    <h1>Contact(개발자) 페이지</h1>
    <Navigation>
    </Navigation>
    <MainContainer>
        <Grid spacing={3}>
            <Grid item xs={12} sm={6}
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center">
                <DevDiv>
                    <h3>개발자</h3>
                </DevDiv>
                <DevDiv>
                    <h3>개발자</h3>
                </DevDiv>
            </Grid>

            <Grid item xs={12} sm={6}
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center">

            </Grid>
        </Grid>
    </MainContainer>
    </>
  );
};


const MainContainer = styled.div`
  color: red;
  border: 1px solid blue;
  height : 50em;
  width: 100%;
  overflow: hidden;
  display : flex;
  justify-content: center;
  align-items: center;
`;

const DevDiv = styled.div`
    border: 1px solid blue;
    height: 50px;
    width: 50px;
    margin-right: 20px;
`