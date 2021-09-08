import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const useStyles = makeStyles((theme) => ({
   image: {
    alignItems: 'center',
    textAlign: 'center',
  },
  car: {
    alignItems: 'center',
    textAlign: 'center',
    margin: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  border: {
    border: '1px'
  }
}));
const AliceCar = (props) => {
  
  const classes = useStyles();
  const handleDragStart = (e) => e.preventDefault();
 
  
  return <div className={classes.car}>
  <AliceCarousel
    animationType="fadeout"
    animationDuration={800}
    centerMode={false}
    disableButtonsControls={true}
    infinite={true}
    autoHeigh={false}
    innerWidth={'100%'}
    autoWidth={false}
    handleDragStart={handleDragStart}
    mouseTracking
    items={props.items}/>
</div>
};
export default AliceCar;
