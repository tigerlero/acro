import React, {Fragment, useMemo, useState,useEffect} from 'react';
import {useCommonStyles} from 'components/styles';
import ContainerCard from 'components/ContainerCard';
import {useFetch} from '../helpers/hooks';
import {Endpoint} from '../constants/enums';
import LinearProgress from '@material-ui/core/LinearProgress';
//import ContainerBreadCrumb from '../components/ContainerBreadCrumb';
import Header from '../components/Header';
import "../App.css";
import {Container, Grid, Card, MuiThemeProvider} from '@material-ui/core';
import {theme} from 'theme';
import NoFiles from 'components/NoFiles';
import DataStreamView from './DataStreamView';
import Alert from '@material-ui/lab/Alert';
import CarouselItem from 'components/CarouselItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Box, Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button'
import {AccessTimeOutlined} from '@material-ui/icons'

const responsive = {
  desktop: {
    breakpoint: {max: 3000, min: 1234},
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: {max: 1234, min: 500},
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: {max: 500, min: 0},
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ContainerView = (props) => {
  const classes = useCommonStyles();
  const uuid = props.match.params.id;
  const url = Endpoint.containers + '/' + uuid;
  const [datastreamsThumbs,setDatastreamsThumbs] = useState([])
  const [isLoading, result, error] = useFetch(url, {
    children: [],
    datastreams: []
  });
  const dataStreamUuid = useMemo(() => {
    const urlParams = new URLSearchParams(props.location.search);
    const uuid = urlParams.get('datastream')
    if (uuid && uuid.length > 0) 
    return uuid;
  }, [props.location.search]);

  const handleDismissDataStream = () => {
    props.history.push(`/containers/${result.uuid}`);
  };

  useEffect(() => {
    if (result?.children?.length > 0)
    console.log(result)
    //  {
    //    const tempArray = []
    //    result.children.forEach((item)=>{
    //       tempArray.push(item)
    //    })
    //    console.log(tempArray)
    //  }

  }, [result])

  return (<MuiThemeProvider theme={theme}>
    <div className={classes.header}><Header/></div>
    <Fragment>
      <LinearProgress
        style={{visibility: isLoading ? 'visible' : 'hidden'}}
      />
      <Container className={classes.cardGrid} maxWidth="md">
        {error && (
          <Alert severity="error" style={{marginBottom: 16}}>
            {error}
          </Alert>
        )}
        <NoFiles result={result} isLoading={isLoading}/>
        {/* End hero unit */}
        
        <Grid container spacing={4}>
          {result.children.map((container, index) => (
            <Grid item key={index} xs={12} sm={6} md={6}>
            
              <ContainerCard container={container}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    
    </Fragment></MuiThemeProvider>
  );
};

export default ContainerView;
