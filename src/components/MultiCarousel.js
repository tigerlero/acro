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
import {carouselCollections} from '../constants'
import {carouselCollectionsEn} from '../constants'
const useStyles = makeStyles((theme) => ({
  video: {
    right: 1,
    left: 1,
    top: 1,
    bottom: 1,
    maxWidth: '350px',

  }, image: {
    alignItems: 'center',
    textAlign: 'center',
  },
  car: {
    position: 'relative',
    height: '20%',
    alignItems: 'center',
    textAlign: 'center',
    margin: 'auto',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '52%',
  },
  border: {
    border: '1px'
  }
}));
const MultiCarousel = (props) => {
  const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
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

  const [videoCollection, setVideoCollection] = useState(carouselCollections[0]);
  




  const handleDragStart = (e) => e.preventDefault();
  const [mainIndex, setMainIndex] = useState(0);
  useEffect(() => {
    const changeLang = async () => {
      const lang = sessionStorage.getItem('lang');
      if (lang=='English'){
        setVideoCollection(carouselCollectionsEn[mainIndex]);
      }
      else{
        setVideoCollection(carouselCollections[mainIndex]);
      }
    }
    changeLang()
  }, [mainIndex])
  const items = [
    <img height="450px" alt="" src={roman} onDragStart={handleDragStart}/>,
    <img height="450px" alt="" src={classic} onDragStart={handleDragStart}/>,
    <img height="450px" alt="" src={archaic} onDragStart={handleDragStart}/>,
  ];
  const syncMain = (e) => {
    setMainIndex(e.item);
    if (sessionStorage.getItem('lang')=='English'){setVideoCollection(carouselCollectionsEn[e.item]);}
    else{setVideoCollection(carouselCollections[e.item]);}
    };
  
  return <div>
    <div className={classes.car}>
        <AliceCarousel
          activeIndex={mainIndex}
          onSlideChanged={syncMain}
          animationType="fadeout"
          animationDuration={800}
          disableButtonsControls={true}
          infinite={true}
          autoHeigh={true}
          mouseTracking
          items={items}/>
    </div>
    <Carousel
      centerMode={true}
      autoPlaySpeed={1000}
      transitionDuration={500}
      containerClass="carousel-container"
      swipeable={true}
      draggable={false}
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
    </Carousel>
  </div>
};

export default MultiCarousel;