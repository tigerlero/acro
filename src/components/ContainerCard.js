import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {NavigateNext} from '@material-ui/icons';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import {Endpoint} from '../constants/enums';
import {downloadThumb} from '../helpers/utils'
import {IconButton} from '@material-ui/core'
import {useFetch} from '../helpers/hooks';

const useStyles = makeStyles((theme) => ({
  root: {
  
    transition: 'transform .2s',
    zIndex: 99,
    '&:hover': {
      transform: 'scale(1.1)',
      cursor: 'pointer',
    },
  },
  media: {
    height: 500,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  title: {
    flex:'left',
    fontWeight: 'bold',
    textAlign:'center',
    textDecodation: 'none',
    '&:link': {
      textDecodation: 'none',
    }
    ,
    '&:visited':  {
      textDecodation: 'none',
    }
    ,
    '&:hover': {
      textDecodation: 'none',
    }
    ,
    '&:active':  {
      textDecodation: 'none',
    }
  },
  description: {
    flex:'left',
    textAlign:'center',
    textDecodation: 'none',
    '&:link': {
      textDecodation: 'none',
    }
    ,
    '&:visited':  {
      textDecodation: 'none',
    }
    ,
    '&:hover': {
      textDecodation: 'none',
    }
    ,
    '&:active':  {
      textDecodation: 'none',
    }
  },
  subtitle: {
    fontWeight: 'bold',
    textDecodation: 'none',
  },
}));

export default function ContainerCard({container}) {
  const classes = useStyles();
  const [thumbnail, setThumbnail] = useState(null)
  const [description,setDescription] = useState('')
  const [link,setLink] = useState('')
  const [linkInt,setLinkInt] = useState('')
  const url = Endpoint.containers + '/' + container.uuid;
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
      
      console.log(findDesc,findUrlInternal,findUrl)
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

  return (
    <Link to={'/containers/' + container.uuid}>
      <Card className={classes.root} variant={'outlined'}>
        <CardContent>
          <Grid container alignContent={'center'} justify={'center'} alignItems={'center'} spacing={2}>
            <Grid item>
              <img style={{height: '360px', width: '450px'}}
                   src={thumbnail == null ? require('../assets/default.png') : thumbnail} alt={container.label}/>
            </Grid>
            <Grid
              item
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                overflow: 'hidden',
              }}
            ><p>
              <Typography className={classes.title} variant="caption" display="block" gutterBottom>
                {container.label ? container.label : '-'}
              </Typography>
              <Typography className={classes.description} variant="body" display="block" gutterBottom>
              {description}
              </Typography>
              <Typography className={classes.description} variant="body" display="block" gutterBottom>
              {(linkInt.length > 0 ) && (  <h6>Link για βίντεο: <a href={linkInt}>(Ιστορίες)</a></h6>)}
              </Typography>
              <Typography className={classes.description} variant="body" display="block" gutterBottom>
              {(link.length > 0 ) && ( <h6>Πηγη: <a href={link}>{link}</a></h6>)}
              </Typography>
              </p>
            </Grid>
            <Grid item>
              <IconButton color={'primary'}>
                <NavigateNext/>
              </IconButton>
            </Grid>
            
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
}
