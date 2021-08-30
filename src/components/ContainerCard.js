import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {NavigateNext} from '@material-ui/icons';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import {downloadThumb} from '../helpers/utils'
import {IconButton} from '@material-ui/core'

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
  subtitle: {
    fontWeight: 'bold',
    textDecodation: 'none',
  },
}));

export default function ContainerCard({container}) {
  const classes = useStyles();
  const [thumbnail, setThumbnail] = useState(null)

  useEffect(() => {
    if (container.uuid && container.datastreams)
      container.datastreams[0] && downloadThumb(container.datastreams[0].uuid, setThumbnail)

    // eslint-disable-next-line
  }, [container.uuid])

  return (
    <Link to={'/containers/' + container.uuid}>
      <Card className={classes.root} variant={'outlined'}>
        <CardContent>
          <Grid container alignContent={'center'} justify={'center'} alignItems={'center'} spacing={2}>
            <Grid item>
              <img style={{minHeight: '350px', maxHeight: '350px'}}
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
              <Typography className={classes.title}>
                {container.label ? container.label : '-'}
              </Typography>
              <Typography
                noWrap
                className={classes.subtitle}
                color={'textSecondary'}
              >
                {container.datastreams ? container.datastreams.length : '-'} files
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
