import "../App.css"
import React, { Component } from 'react';
import Header from "components/Header";
import {theme} from 'theme'
import {Container, Grid, Card, MuiThemeProvider} from '@material-ui/core'
function Xronologio(){
  return(<MuiThemeProvider theme={theme}>
    <Header/>
      <Container style={{marginTop:20}}>
      <Grid container>
        <Grid item><div style={{
    right: 0,
    left: 0,
    top:0,
    bottom: 0,
    marginTop: 250,
    minWidth: "100%",
    minHeight: "75%",
    paddingTop: "1px", 
    padding: "0",
    position: "absolute",

    }}>
    
    <iframe title="xronologio" frameborder="0" scrolling="no" allowfullscreen="true" loading="eager" width="100%" height="100%"  src="http://198.187.30.2:8093/" />
    </div></Grid>
    </Grid>
    </Container>
  </MuiThemeProvider>);
}

export default Xronologio;
