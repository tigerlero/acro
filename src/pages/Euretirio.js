import Header from '../components/Header';
import {NavLink} from 'react-router-dom';
import {Container, Grid, Card, MuiThemeProvider} from '@material-ui/core'
import {theme} from 'theme'
import {Button} from '@material-ui/core';
import {withStyles, makeStyles,} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';


const BootstrapButton = withStyles({
  root: {
    width:"150px",
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    color: '#111111',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#00bb00',
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
      backgroundColor: '#00ee00',
      borderColor: '#555666',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#00ee00',
      borderColor: '#555666',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Euretirio(){
  
  const options = [
    'Άγαλμα',
    'Αρχιτεκτονικό γλυπτό',
    'Αρχιτεκτονικό μέλος'
  ]
  const options2 = [
    'Ερέχθειο',
    'Ναός Αθηνάς Νίκης',
    'Παρθενώνας'
  ]
  const options3 = [
    'Αρχαϊκή εποχή',
    'Κλασική εποχή',
    'Ρωμαϊκή εποχή'
  ]
  const options4 = [
    'Σύνθεση',
     'Μουσείο Ακρόπολης',
     'British Museum, London',
     'Musée des Beaux-Arts, Lyon',
     'Musée Rodin, Paris',
     'National Museum of Denmark, Copenhagen'
  ]
  const classes = useStyles();
  

  const [eidos, setEidos] = React.useState('');
  const [mnimeio, setMnimeio] = React.useState('');
  const [epoxi, setEpoxi] = React.useState('');
  const [thesi, setThesi] = React.useState('');
  const handleChange = (event) => {
    setEidos(event.target.value);
  };
  const handleChange2 = (event) => {
    setMnimeio(event.target.value);
  };
  const handleChange3 = (event) => {
    setEpoxi(event.target.value);
  };
  const handleChange4 = (event) => {
    setThesi(event.target.value);
  };
    return(
      <MuiThemeProvider theme={theme}>
        <Header/>
          <Container style={{marginTop:40}}>
          <Grid container>
          <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-simple-select-label">Είδος</InputLabel>
          <NativeSelect
            id="demo-simple-select-label"
            value={eidos}
            onChange={handleChange}
          >
            <option aria-label="None" value="" />
            <option value={options[0]}>{options[0]}</option>
            <option value={options[1]}>{options[1]}</option>
            <option value={options[2]}>{options[2]}</option>
          </NativeSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="2">Μνημείο</InputLabel>
          <NativeSelect
            id="2"
            value={mnimeio}
            onChange={handleChange2}
          >
            <option aria-label="None" value="" />
            <option value={options2[0]}>{options2[0]}</option>
            <option value={options2[1]}>{options2[1]}</option>
            <option value={options2[2]}>{options2[2]}</option>
          </NativeSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="3">Εποχή</InputLabel>
        <NativeSelect
          id="3"
          value={epoxi}
          onChange={handleChange3}
        >
          <option aria-label="None" value="" />
          <option value={options3[0]}>{options3[0]}</option>
          <option value={options3[1]}>{options3[1]}</option>
          <option value={options3[2]}>{options3[2]}</option>
        </NativeSelect>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="4">Θέση</InputLabel>
        <NativeSelect
          id="4"
          value={thesi}
          onChange={handleChange4}
        >
          <option aria-label="None" value="" />
          <option value={options4[0]}>{options4[0]}</option>
          <option value={options4[1]}>{options4[1]}</option>
          <option value={options4[2]}>{options4[2]}</option>
          <option value={options4[3]}>{options4[3]}</option>
          <option value={options4[4]}>{options4[4]}</option>
          <option value={options4[5]}>{options4[5]}</option>
        </NativeSelect>
      </FormControl>
            	 
			

            <Grid item></Grid>
            <Grid item></Grid>
            <Grid item></Grid>
            <Grid item></Grid>
        </Grid>
        </Container>
      </MuiThemeProvider>);
}

export default Euretirio;
