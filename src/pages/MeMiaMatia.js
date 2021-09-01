import Header from '../components/Header';
import {Container, Grid, Card, MuiThemeProvider} from '@material-ui/core'
import React, { Component } from 'react';
import Slider from '../components/Slider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {theme} from 'theme'
function MeMiaMatia(){
  return(
    <MuiThemeProvider theme={theme}>
      <Header/>
        <Container style={{marginTop:20}}>
        <Grid container>
          <Grid item>ΜΕ ΜΙΑ ΜΑΤΙΑ</Grid>
          <Grid item><Slider /></Grid>
          <Grid item></Grid>
          <Grid item></Grid>
      </Grid>
      </Container>
    </MuiThemeProvider>);
}



export default MeMiaMatia;
