import React from 'react';
import Modal from '@material-ui/core/Modal';
import ReactPlayer from 'react-player';
import {Button} from '@material-ui/core';
import {withStyles, makeStyles,} from '@material-ui/core/styles';


const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    color: '#111111',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: 'transparent',
    borderColor: '#transparent',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#cdcdcd',
      borderColor: '#555666',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#cdcdcd',
      borderColor: '#555666',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);


const useStyles = makeStyles((theme) => ({
  margin: {
   width:'351px',
    '&:hover': {
      backgroundColor: 'rgba(240,240,240,.9)',
      borderColor: '#898989',
      boxShadow: 'none',
      border: '2px solid',
      borderRadius: '.35rem',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'rgba(240,240,240,.9)',
      borderColor: '#898989',
      border: '2px solid',
      borderRadius: '.35rem',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(240,240,240,.9)',
      backgroundColor: 'rgba(240,240,240,.9)',
      borderColor: '#898989',
      border: '2px solid',
      borderRadius: '.35rem',
    },
  },
  textD:{
textAlign:'center',
  },

  thumbnail: {
    width: '350px',
    height: '250px',
    paddingBottom: '10px',
  },
  button: {
    marginTop: '10px 10px',
    position: 'relative',
    display: 'inline-block',
    fontWeight: '400',
    color: '#212529',
    textAlign: 'center',
    verticalAlign: 'middle',
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    borderRadius: '.25rem',
  },
  video:{
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


export default function CarouselVideoItem(props) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const video = (<ReactPlayer
    className={classes.video}
          autoplay
          controls
          height="100%" width="100%"
          muted
          playing='true'
          id ="vid"
    onclick={handleClose}
    onEnded={handleClose}
    onPause={handleClose}
    url={props.name}
  />);
  var image = (<div>
    <div className={classes.thumbnail}><img alt="" src={props.thumb}/></div>
  </div>);
  
  return (
    <div className={classes.margin}>{image}
    <Modal open={open} closeAfterTransition
    onClose={handleClose}>{video}
    </Modal>
      <h6 className={classes.textD}>ΤΙΤΛΟΣ</h6>
      <p className={classes.textD}>περιγραφη</p>
      <div className="button">
{!open ? <BootstrapButton variant="contained" color="primary"  onClick={handleOpen} disableRipple className={classes.margin}>
Play video
  </BootstrapButton> : <BootstrapButton variant="contained" color="primary"  onClick={handleClose} disableRipple className={classes.margin}>
Stop
  </BootstrapButton>}
</div></div>
  
  );
}
