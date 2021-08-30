import React, {useEffect, useState } from 'react';
import {Container, Grid, MuiThemeProvider} from '@material-ui/core'
import Header from '../components/Header';
import ReactPlayer from 'react-player';
import test from "assets/video/intro.mp4";
import { makeStyles } from '@material-ui/core/styles';
import {theme} from 'theme'
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
 }
}));
function HomePage() {
  const classes = useStyles();
  const [showVideo,setShowVideo] = useState(false);

  useEffect(()=>{
    const isShown = sessionStorage.getItem('introShown')
    if (!isShown)
     setShowVideo(true)
  },[])

  const handleHideVideo = () =>{
    setShowVideo(false)
    sessionStorage.setItem('introShown','1')
  }

    return (
      <MuiThemeProvider theme={theme}>
        <Header/>
        <Container style={{marginTop:20}}>
          <Grid container>
            <Grid item>ΑΡΧΙΚΗ</Grid>
        </Grid>
        </Container>
          {showVideo && (<ReactPlayer
          className={classes.video}
          autoplay
          muted
          playing='true'
          id ="vid"
          height="100%" width="100%"
          onPause={handleHideVideo}
          onClick={handleHideVideo}
          onEnded={handleHideVideo}
          url={test}
        />)}
        </MuiThemeProvider>

    );
}
export default HomePage;
