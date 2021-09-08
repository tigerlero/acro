import Header from '../components/Header';
import "../App.css"
import {Container, Grid, Card, MuiThemeProvider} from '@material-ui/core'
import {theme} from 'theme'
import { makeStyles } from '@material-ui/core/styles';
import {useState } from 'react';
import React, {Fragment,  useMemo} from 'react';
import ContainerCard from "../components/ContainerCard";
import LinearProgress from "@material-ui/core/LinearProgress";
import Alert from "@material-ui/lab/Alert";
//import ContainerBreadCrumb from "../components/ContainerBreadCrumb";
import {useFetch} from '../helpers/hooks'
import {useEffect} from 'react';
import {Endpoint} from '../constants/enums'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import {downloadThumb, fetchData} from '../helpers/utils'
import {IconButton} from '@material-ui/core'
import { API_URL } from 'config';
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



function Exhibits(props){

  const classes = useStyles()
  const uuid = props.match.params.id
  const url = `${Endpoint.containers}/${uuid}`
  const [isLoading, result, error] = useFetch(url, {
    children: [],
    datastreams: []
  });
  
  console.log(result)
  const exhibitArray = result.children.map((res) => res);
  console.log(exhibitArray)
  

  // carouselImages.map((car) => downloadThumb(car, setImages));
  // console.log(images)
  return(<MuiThemeProvider theme={theme}>
    <Header/>
    <Fragment>
      <LinearProgress
        style={{ visibility: isLoading ? "visible" : "hidden" }}
      />
      <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
          {exhibitArray && exhibitArray.map((container, index) => (
            <Grid item key={index} xs={12} sm={6} md={6}>
              <ContainerCard container={container} />
            </Grid>
            
          ))}
        </Grid>
      </Container>
    </Fragment>
    
      
  </MuiThemeProvider>);
}

export default Exhibits;
