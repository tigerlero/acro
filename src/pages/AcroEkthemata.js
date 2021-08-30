import Header from '../components/Header';
import "../App.css"
import CardContent from '@material-ui/core/CardContent';
import {Container, Grid, Card, MuiThemeProvider} from '@material-ui/core'
import {theme} from 'theme'
import Typography from '@material-ui/core/Typography';
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
import {acro} from '../constants';
import {Button} from '@material-ui/core';
import {withStyles, makeStyles,} from '@material-ui/core/styles';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import {NavLink} from 'react-router-dom';

const BootstrapButton = withStyles({
  root: {
    width:"150px",
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    color: '#111111',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: 'transparent',
    borderColor: '#transparent',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#cdcdcd',
      borderColor: '#555666',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#cdcdcd',
      borderColor: '#555666',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);
const useStyles = makeStyles((theme) => ({
  
  loop:{
    display: 'flex',
  justifyContent: 'center',
     width: '320px',
     float: 'left',
     alignContent:'center',
     alignItems:'center',
     paddingLeft:'75px',
     margin: '15px'
 },
 ekthema:{
  display: 'block',
  padding: '10px',
  borderTop: '1px solid rgba(0,0,0,.125)',
  borderBottom: '1px solid rgba(0,0,0,.125)',
  
 },
 ekthemaf:{
  display: 'block',
  padding: '10px',
 },
 ekthemat:{
  display: 'block',
  padding: '10px',
 },
 title: {
   fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
  
  textAlign:'center',
},
descr:{
  paddingBottom:'40px',
  paddingTop:'20px',
  textAlign:'center',
  width:'35%',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
  marginLeft: 'auto',
  marginRight: 'auto',
},
cardpad:{
  padding: 0,
  margin: 0,
  paddingBottom: 0,

},
back:{
  paddingTop:'30px',
  paddingLeft:'30px',
}
}));



function AcroEkthemata(){
  const classes = useStyles();

  const items = acro.map((image) =>
  <div className={classes.loop}>
  <Card className={classes.cardpad}>
      
            <img height="200px" width='320px' alt="" src={image}  />
            <Typography className={classes.ekthemat} variant="h5" component="h2">Μουσείο της Ακρόπολης</Typography>
            
            <Typography className={classes.ekthema} variant="body2" component="p">Τμημα του κορμου του Ποσειδώνα από το δυτικό αέτωμα</Typography>
            
            <Typography className={classes.ekthemaf} variant="body2" component="p"><small>Κλασική εποχή, Αρχιτεκτονικό γλυπτό, Παρθενώνας, Αέτωμα</small></Typography>
            
      </Card>
      </div>
        
  );

  return(<MuiThemeProvider theme={theme}>
    <Header/>
    <div className={classes.back}><NavLink  to="/mouseia" activeClassName={classes.activeMenu} className={classes.navLink}
    exact={true}><BootstrapButton variant="contained" color="primary" 
    startIcon={<ArrowBackIos />}
  >
    Πίσω
  </BootstrapButton></NavLink></div>
    
    
    <Typography className={classes.title} variant="h4" component="h4">Μουσείο της Ακρόπολης</Typography>
<Typography className={classes.descr} variant="body2" component="p">The Acropolis Museum is an archaeological museum focused on the findings of the archaeological site of the Acropolis of Athens. The museum was built to house every artifact found on the rock and on the surrounding slopes, from the Greek Bronze Age to Roman and Byzantine Greece.</Typography>
    {items}
  </MuiThemeProvider>);
}

export default AcroEkthemata;
