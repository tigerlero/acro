import Header from '../components/Header';
import {Container, Grid, Card, MuiThemeProvider} from '@material-ui/core'
import {theme} from 'theme'
import MultiCarousel from 'components/MultiCarousel';
import ReactPlayer from 'react-player';
import test from "assets/video/intro.mp4";
import React, {useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
 video:{
    position: 'fixed',
    right: 0,
    left: 0,
    top:0,
    bottom: 0,
    minWidth: "100%",
    minHeight: "100%",
    backgroundColor:"#000",
 },
}));

function Istories(){
  const classes = useStyles();
  
  
    return(
      <MuiThemeProvider theme={theme}>
        <Header/>
        <Container style={{marginTop:20, minWidth:"100%"}}>
        
          
        
        </Container>
        <MultiCarousel/>
          
        </MuiThemeProvider>
      );
}

export default Istories;
