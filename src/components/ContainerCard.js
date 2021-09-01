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
    height: 400,
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
    fontWeight: 'bold',
    textDecodation: 'none',
  },
  description: {
    textDecodation: 'none',
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
  const url = Endpoint.containers + '/' + container.uuid;
  const [isLoading, result, error] = useFetch(url, {
    children: [],
    datastreams: []
  });
  useEffect(() => {
    if (result.uuid)
    {
      result.datastreams[0] && downloadThumb(result.datastreams[0].uuid, setThumbnail)   
      const findProp = result.properties.find((p)=>p.key==='property:description')
      console.log(findProp)
      if (findProp === -1)
      {
        setDescription('bla bla')
      }
      else if(findProp.value.length > 0)
      {
        const parsedDescr = JSON.parse(findProp.value)
        setDescription(parsedDescr.values)
      }
      else{
        setDescription(findProp.value)
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
              <img style={{height: '280px', width: '360px'}}
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
            >
              <Typography className={classes.title} variant="caption" display="block" gutterBottom>
                {container.label ? container.label : '-'}
              </Typography>
              <Typography className={classes.description} variant="caption" display="block" gutterBottom>
              {description}
              </Typography>
        
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
