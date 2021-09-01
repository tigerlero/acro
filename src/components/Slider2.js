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


const Slider2 = () => {
  const classes = useStyles();
  return <div className={classes.root}>
   
  <Carousel className={classes.image} autoPlay={true}>
    <div className={classes.image}>
      <img width="80%" height="60%" alt="" src="http://www.talent.gr/demos/acropolis/diaspora/p4-1-1.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div className={classes.image}>
      <img width="80%" height="60%" alt="" src="http://www.talent.gr/demos/acropolis/diaspora/p4-1-2.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div className={classes.image}>
      <img width="80%" height="60%" alt="" src="http://www.talent.gr/demos/acropolis/diaspora/p4-1-3.jpg" />
      Legend 3
    </div>
  </Carousel>
  
  </div>
}
;
export default Slider2;
