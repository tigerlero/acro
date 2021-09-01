import Header from '../components/Header';
import "../App.css"
import {Container, Grid, Card, MuiThemeProvider} from '@material-ui/core'
import {theme} from 'theme'
import React, { Component } from 'react';
function Mouseia(){
  return(<MuiThemeProvider theme={theme}>
    <Header/>
      <Container style={{marginTop:20}}>
      <Grid container>
        <Grid item>ΜΟΥΣΕΙΑ</Grid>
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item></Grid>
    </Grid>
    </Container>
  </MuiThemeProvider>);

}

export default Mouseia;
