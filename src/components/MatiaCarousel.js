import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, {useEffect, useState} from 'react';
import '@brainhubeu/react-carousel/lib/style.css';
import {makeStyles} from '@material-ui/core/styles';
import roman from 'assets/images/roman.jpg';
import classic from 'assets/images/classic.jpg';
import archaic from 'assets/images/archaic.jpg';

import CarouselVideoItem from 'components/CarouselVideoItem';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Matia20en} from '../constants';
import {matiaCollection} from '../constants';
import {Matia20} from '../constants';
const useStyles = makeStyles((theme) => ({
  video: {
    top:1,
    right: 1,
    left: 1,
    bottom: 1,
    maxWidth: '300px',

  }, image: {
    alignItems: 'center',
    textAlign: 'center',
  },
  car: {
    display:'inline-flex',
    height: '200px',
    objectFit: 'cover',
    position: 'absolute',
    alignItems: 'center',
    textAlign: 'center',
    top:300,
    right: 50,
    left: 50,
    
    width: '90%',
  },
  border: {
    border: '1px'
  },
  content:{
    top:600,
    right: 50,
    left: 50,
   
    position: 'absolute',
    height: '20%',
    alignItems: 'center',
    textAlign: 'center',
  }
}));
const MatiaCarousel = (props) => {
  const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 1400},
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: {max: 1400, min: 464},
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const classes = useStyles();

  const [videoCollection, setVideoCollection] = useState(Matia20[0]);

  const handleDragStart = (e) => e.preventDefault();
  const [mainIndex, setMainIndex] = useState(0);
  useEffect(() => {
    const changeLang = async () => {
      const lang = sessionStorage.getItem('lang');
      if (lang=='English'){
        setVideoCollection(Matia20en[mainIndex]);
      }
      else{
        setVideoCollection(Matia20[mainIndex]);
      }
    }
    changeLang()
  }, [mainIndex])
  const items = matiaCollection.map((image) =>
  <img height="150px" width='96px' alt="" src={image} onDragStart={handleDragStart} />,);

  const syncMain = (e) => {
    setMainIndex(e.item);
    if (sessionStorage.getItem('lang')=='English'){setVideoCollection(Matia20en[e.item]);}
    else{setVideoCollection(Matia20[e.item]);}
    };
  
  return <div >
    <div className={classes.car}>
    <AliceCarousel
    activeIndex={mainIndex}
    onSlideChanged={syncMain}
    animationType="fadeout"
    animationDuration={800}
    disableButtonsControls={false}
    infinite={true}
    autoHeigh={false}
    mouseTracking
    responsive={{
      0: {
        items: 20
      },
      300: {
        items: 20
      },
      500: {
        items: 20
      },
      700: {
        items: 20
      },
      800: {
        items: 20
      },
      900: {
        items: 20
      },
      1024: {
        items: 20
      },
      1200: {
        items: 20
      },
      1300: {
        items: 20
      },
      1400: {
        items: 20
      },
      1500: {
        items: 20
      },
      3000: {
        items: 20
      },
    }}
    controlsStrategy="alternate"
    items={items}/>
    </div>
    <div className={classes.content}>
    <Carousel
      centerMode={true}
      autoPlaySpeed={1000}
      transitionDuration={500}
      containerClass="carousel-container"
      swipeable={true}
      draggable={true}
      showDots={false}
      focusOnSelect={true}
      responsive={responsive}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-8-px"
    >
      {videoCollection.map((item, i) => {
          return <div key={i} className={classes.video}><CarouselVideoItem name={item.video} thumb={item.thumb}/></div>
        }
      )}
    </Carousel></div>
  </div>
};

export default MatiaCarousel;