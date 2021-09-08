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
import {downloadThumb, fetchData} from '../helpers/utils'
import {IconButton} from '@material-ui/core'
import { API_URL } from 'config';
const useStyles = makeStyles((theme) => ({
  
  cardGrid:{
    width:"100%",
    height:"100%",
    
    
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



function MuseumId(props){

  const classes = useStyles()
  const uuid = props.match.params.id
  const url = `${Endpoint.containers}/${uuid}`
  const [isLoading,result,error] = useFetch(url)
  const [museumFullDetails,setMuseumFullDetails] = useState({title:'',description:''})
  const [imagesUuid,setImagesUuid] = useState([])
  const [exhibits,setExhibits]=useState('')
  useEffect(()=>{
    if (result && result.uuid)
       {
          const {children,label,properties} = result
          const desc= properties.find((p)=>p.key==='property:description')
          const parsedDesc = JSON.parse(desc.value)
          setMuseumFullDetails({title:label,description:parsedDesc.values})
          const findCarousel = children.filter((car)=>car.label === 'Εικόνες (καρουζέλ)')
          const findExhibits = children.filter((car)=>car.label === 'Εκθέματα')
          fetchData(`${API_URL}/containers/${findCarousel[0].uuid}`).then((res)=>
          {
            setImagesUuid(res.datastreams.map((img)=>img.uuid))
          })
          fetchData(`${API_URL}/containers/${findExhibits[0].uuid}`).then((res)=>
          {
            setExhibits(res.uuid)
            console.log(res)
          })

      }
  },[result])

  // carouselImages.map((car) => downloadThumb(car, setImages));
  // console.log(images)
  return(<MuiThemeProvider theme={theme}>
    <Header/>
    <Fragment>
      <LinearProgress
        style={{ visibility: isLoading ? "visible" : "hidden" }}
      />
      <Container className={classes.cardGrid} maxWidth="xl">
    <MouseioMesa museum = {museumFullDetails} images={imagesUuid} exhibits={exhibits}/>
        
      </Container>
    </Fragment>
    
      
  </MuiThemeProvider>);
}

export default MuseumId;
