import Header from '../components/Header';
import {NavLink} from 'react-router-dom';
import {Container, Grid, Card, MuiThemeProvider} from '@material-ui/core'
import {theme} from 'theme'
import {Button} from '@material-ui/core';
import {withStyles, makeStyles,} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

function Euretirio(){
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
    return(
      <MuiThemeProvider theme={theme}>
        <Header/>
          <Container style={{marginTop:20}}>
          <Grid container>
          <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple"></InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
          <option value={1}>Σύνθεση</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>

            <Grid item><NavLink  to="/mouseia" 
            exact={true}><BootstrapButton variant="contained" color="primary" 
           
          >
            Σύνθεση
          </BootstrapButton></NavLink></Grid>
            <Grid item></Grid>
            <Grid item></Grid>
            <Grid item></Grid>
        </Grid>
        </Container>
      </MuiThemeProvider>);
}

export default Euretirio;
