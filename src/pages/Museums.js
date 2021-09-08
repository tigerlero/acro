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
import {useEffect} from 'react';
import {Endpoint} from '../constants/enums'
import FilePreview from 'components/FilePreview';
import {NavLink} from 'react-router-dom';
import {NavigateNext} from '@material-ui/icons';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import {downloadThumb} from '../helpers/utils'
import {IconButton} from '@material-ui/core'
import MuseumId from './MuseumId';
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



function Museums(){

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
  useEffect(() => {
    if (result.uuid)
    {
      result.datastreams[0] && downloadThumb(result.datastreams[0].uuid, setThumbnail)   
      const findDesc = result.properties.find((p)=>p.key==='property:description')
      const findUrlInternal = result.properties.find((p)=>p.key==='property:url-internal')
      const findUrl = result.properties.find((p)=>p.key==='property:url')
      result.children[1] && setLabel(result.children[1].label)
      
      //label=='Εκθέματα' && setEkthemata(result.children[0])
      setEkthemata(result.children[0].label)
      //JSON.parse(result.children[1].uuid.values
      if (findDesc === undefined)
      {
        setDescription('Περιγραφή')
      }
      else if(findDesc.value.length > 0)
      {
        const parsedDescr = JSON.parse(findDesc.value)
        setDescription(parsedDescr.values)
      }
      else{
        setDescription(findDesc.value)
      }
      
      if (findUrlInternal === undefined)
      {
        setLinkInt('')
      }
      else if(findUrlInternal.value.length > 0)
      {
        const parsedDescr = JSON.parse(findUrlInternal.value)
        setLinkInt(parsedDescr.values)
      }
      else{
        setLinkInt(findUrlInternal.value)
      }
      if (findUrl === undefined)
      {
        setLink('')
      }
      else if(findUrl.value.length > 0)
      {
        const parsedDescr = JSON.parse(findUrl.value)
        setLink(parsedDescr.values)
      }
      else{
        setLink(findUrl.value)
      }
    }
    // eslint-disable-next-line
  }, [result.uuid])
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
 
 
  return(<MuiThemeProvider theme={theme}>
    <Header/>
    <Fragment>
      
      <LinearProgress
        style={{ visibility: isLoading ? "visible" : "hidden" }}
      />
      <Container className={classes.cardGrid} maxWidth="md">
        
        <Grid container spacing={4}>
          {mouseia && mouseia.map((container, index) => (
            <Grid item key={index} xs={12} sm={6} md={6}>
              <Link to={'/museum/'+ container.uuid }> 
              <ContainerCard container={container} />
              </Link>
            </Grid>
            
          ))}
        </Grid>
      </Container>
    </Fragment>
    
      
  </MuiThemeProvider>);
}

export default Museums;
