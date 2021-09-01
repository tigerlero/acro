import Header from '../components/Header';
import "../App.css"
import {Container, Grid, Card, MuiThemeProvider} from '@material-ui/core'
import {theme} from 'theme'
import { makeStyles } from '@material-ui/core/styles';
import {useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React, {Fragment,  useMemo} from 'react';
import { useCommonStyles } from "../components/styles";
import ContainerCard from "../components/ContainerCard";
import LinearProgress from "@material-ui/core/LinearProgress";
import Alert from "@material-ui/lab/Alert";
//import ContainerBreadCrumb from "../components/ContainerBreadCrumb";
import {useFetch} from '../helpers/hooks'
import {Endpoint} from '../constants/enums'
import FilePreview from 'components/FilePreview';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  
  image:{
    width:"1200px",
    height:"800px",
    alignItems: 'center',
    textAlign: 'center',
    
  },
  span:{
    marginTop: "10px" ,
    alignItems: 'center',
    textAlign: 'center',
    display: "block"
    
  },
  full:{
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



function Mouseia(){

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const [akroLoading,akroResult,akroError] = useFetch(`${Endpoint.containers}/52e73b8d-9f53-45b1-a6a6-6adfd80d7b18`,[]);
  const [vreLoading,vreResult,vreError] = useFetch(`${Endpoint.containers}/f3109b71-3072-4c6c-b17a-9cba019978cb`,[]);
  
  const [ethnLoading,ethnResult,ethnError] = useFetch(`${Endpoint.containers}/36738f8a-9382-4df4-8c80-852d59d35010`,[]);
  
  const isLoading = useMemo(()=>{
    try{
      return !!(akroLoading || vreLoading || ethnLoading);
    }
    catch (e){
      return false
    }
  },[akroLoading,vreLoading,ethnLoading])

  const error = useMemo(()=>{
    try{
      if (akroError || vreError || ethnError)
        return true
    }
    catch (e){
      return false
    }
  },[akroError,vreError,ethnError])

  const result = useMemo(()=>{
    try{
      if (akroResult.uuid||vreResult.uuid||ethnResult.uuid)
      {
        return [akroResult,vreResult,ethnResult]
      }
    }
    catch (e){
      console.log(e)
      return []
    }
  },[akroResult,vreResult,ethnResult]);

  return(<MuiThemeProvider theme={theme}>
    <Header/>
    <Fragment>
      {/*<div className={classes.heroContent}>*/}
      {/*  <Container maxWidth="md">*/}
      {/*    <Grid item xs={12} container justify={"flex-start"}>*/}
      {/*      <ContainerBreadCrumb path={[]}/>*/}
      {/*    </Grid>*/}
      {/*  </Container>*/}
      {/*</div>*/}
      <LinearProgress
        style={{ visibility: isLoading ? "visible" : "hidden" }}
      />
      <Container className={classes.cardGrid} maxWidth="md">
        {error && (
          <Alert severity="error" style={{ marginBottom: 16 }}>
            {error}
          </Alert>
        )}
        {/* End hero unit */}
        <Grid container spacing={4}>
          {result && result.map((container, index) => (
            <Grid item key={index} xs={12} sm={6} md={6}>
              <ContainerCard container={container} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
    <Modal className={classes.full} open={open} closeAfterTransition
    >{<TransformWrapper
        initialScale={1}
        initialPositionX={200}
        initialPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform, handleClose }) => (
          <React.Fragment>
            <div className="tools">
              <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button>
              <button onClick={() => resetTransform()}>x</button>
              <button onClick={() => handleClose()}>back</button>
            </div>
            <TransformComponent>
              <img src="http://www.talent.gr/demo/static/media/acropolis_1.4c17059b.jpg" alt="test" />
              <div>Example text</div>
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>}
    </Modal>
      <Container style={{marginTop:20}}>
      <Grid  container justifyContent="center" spacing={2}>
      <Grid item ><NavLink to="/acropolis" activeClassName={classes.activeMenu} className={classes.navLink}
      exact={true}><img width="400px" height="300px" alt="" src="http://www.talent.gr/demo/static/media/acropolis_1.4c17059b.jpg" />
      </NavLink><span className={classes.span}>Μουσείο της Ακρόπολης</span></Grid>
        <Grid item><img width="400px" height="300px" alt="" src="http://www.talent.gr/demo/static/media/british_1.a8fb8d1e.jpg" />
        <span className={classes.span}>Βρετανικό Μουσείο</span></Grid>
        <Grid item><img width="400px" height="300px" alt="" src="http://www.talent.gr/demo/static/media/copenhagen_1.e63b5b53.jpg" />
        <span className={classes.span}>Μουσείο Rodin στο Παρίσι</span></Grid>
        <Grid item><img width="400px" height="300px" alt="" src="http://www.talent.gr/demo/static/media/lyon_1.84ced0f8.jpg" />
        <span className={classes.span}>Μουσείο Καλών Τεχνών της Λυών </span></Grid>
        <Grid item><img width="400px" height="300px" alt="" src="http://www.talent.gr/demo/static/media/rodin_1.9ac4bced.jpg" />
        <span className={classes.span}>Εθνικό Μουσείο της Κοπεγχάγης</span></Grid>
        
    </Grid>
    </Container>
  </MuiThemeProvider>);
}

export default Mouseia;
