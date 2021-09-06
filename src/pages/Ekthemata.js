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
import MouseioMesa from 'components/MouseioMesa';
//import ContainerBreadCrumb from "../components/ContainerBreadCrumb";
import {useFetch} from '../helpers/hooks'
import {useEffect} from 'react';
import {Endpoint} from '../constants/enums'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import {downloadThumb} from '../helpers/utils'
import {IconButton} from '@material-ui/core'
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



function Ekthemata(){

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const [mouseiaLoading,mouseiaResult,mouseiaError] = useFetch(`${Endpoint.containers}/8a4aa059-4b9a-40d3-93b5-bb94abe182ee`,[]);
  const MLoading = useMemo(()=>{
    try{
      return !!(mouseiaLoading);
    }
    catch (e){
      return false
    }
  },[mouseiaLoading])

  const Merror = useMemo(()=>{
    try{
      if (mouseiaError)
        return true
    }
    catch (e){
      return false
    }
  },[mouseiaError])

  const Mresult = useMemo(()=>{
    try{
      if (mouseiaResult.uuid)
      {
        return [mouseiaResult]
      }
    }
    catch (e){
      console.log(e)
      return []
    }
  },[mouseiaResult]);
  const [thumbnail, setThumbnail] = useState(null)
  const [description,setDescription] = useState('')
  const [link,setLink] = useState('')
  const [linkInt,setLinkInt] = useState('')
  const [ekthemata, setEkthemata] = useState(null)
  const [label, setLabel] = useState('null')
  const url = Endpoint.containers + '/' + mouseiaResult.uuid;
  const [isLoading, result, error] = useFetch(url, {
    children: [],
    datastreams: []
  });
  
  const sLoading = useMemo(()=>{
    try{
      return !!(isLoading);
    }
    catch (e){
      return false
    }
  },[isLoading])

  const serror = useMemo(()=>{
    try{
      if (error)
        return true
    }
    catch (e){
      return false
    }
  },[error])

  const sresult = useMemo(()=>{
    try{
      if (result.uuid)
      {
        return [result]
      }
    }
    catch (e){
      console.log(e)
      return []
    }
  },[result]);
  const mouseia = result.children.map((res) => res);
  //const mouseia = result.children[0].label
  console.log("result");
  console.log(result);
 
  return(<MuiThemeProvider theme={theme}>
    <Header/>
    <Fragment>
      
      <LinearProgress
        style={{ visibility: isLoading ? "visible" : "hidden" }}
      />
      <Container className={classes.cardGrid} maxWidth="md">
        
        <MouseioMesa/>
      </Container>
    </Fragment>
    
      
  </MuiThemeProvider>);
}

export default Ekthemata;
