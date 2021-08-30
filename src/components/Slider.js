import React from "react";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from '@material-ui/core/styles';
import "../assets/carousel.min.css";

const useStyles = makeStyles((theme) => ({
  
  image:{
    width:"1200px",
    height:"800px",
    alignItems: 'center',
    textAlign: 'center',
    
  },
  car:{
    width:"80%",
    height:"80%",
    alignItems: 'center',
    textAlign: 'center',
    
  },
  
  
}));


const Slider = () => {
  const classes = useStyles();
  return <div className={classes.root}>
   
  <Carousel  className={classes.image} autoPlay={true}>
    <div className={classes.image}>
      <img width="80%" height="80%" alt="" src="http://www.talent.gr/demo/static/media/diaspora3.82fd0858.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div className={classes.image}>
      <img width="80%" height="80%" alt="" src="http://www.talent.gr/demo/static/media/diaspora1.6ad21aba.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div className={classes.image}>
      <img width="80%" height="80%" alt="" src="http://www.talent.gr/demo/static/media/diaspora2.7ff5d622.jpg" />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
  
  </div>
}
;
export default Slider;
