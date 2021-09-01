import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import homepage from '../assets/images/homepage.png';
import headerImage from '../assets/images/header.jpg';
import {Grid, Select} from '@material-ui/core'
import { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    flexGrow: 1,
    boxShadow: 0,
  },
  title: {
    flexGrow: 1,
    color:'white',
    fontWeight:500,
    textShadow:'2px 2px #000'
  },
  languageIcons: {
    width:100,
    backgroundColor:"rgba(200, 200, 200, 0.7);",
    height:80,
    alignItems:'right',
    textAlign:"right",
    color:'#444555',
    padding:10
  },
  appbar: {
    backgroundColor: 'rgb(173,173,173)',
    backgroundImage: `url(${headerImage})`,
    width: '100%',
    height: '190px',
    color: 'black',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: theme.spacing(1.5),
    overflow: 'hidden',
    backgroundSize: 'cover',

  },
  menubar: {
    backgroundColor: 'rgb(248,249,250)',
    color: 'black',
    position: 'center',
    elevation: 2,
    boxShadow: 10,
    alignItems: 'center',
    textAlign: 'center',
  },
  toolbar:{
    marginTop:10,
    position:'relative',
    [theme.breakpoints.down('sm')]:{
      marginTop:20,
    }
  },
  nav: {
    backgroundColor: 'transparent',
    display: 'flex',
    height: 24,
    float: 'center',
    color: 'darkgray',
    overflow: 'hidden',
    alignItems: 'center',
    textAlign: 'center',
    padding: '.5rem 1rem',
    boxSizing: 'border-box',
  },
  navLink: {
    float: 'center',
    color: 'darkgray',
    overflow: 'hidden',
    padding: '.5rem 1rem',
    boxSizing: 'border-box',
    fontWeight: '700',
    textDecoration: 'none',
  },
  activeMenu: {
    color: 'black',
  },
  gr:{
    color: "blue",
  },
  en:{
    color: "purple",
  },
}));

const Header = () => {
  const classes = useStyles();
 

  useEffect(()=>{
    const languageCh = sessionStorage.getItem('lang')
    setLanguage(languageCh);
  },[])

  
  const [language, setLanguage] = React.useState('Greek');
  const handleChange = (event) => {
    setLanguage(event.target.value);
    sessionStorage.setItem('lang',event.target.value)
  };
 
  return <div className={classes.root}>
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Grid container direction={'column'}>
          <Grid item container justify={'space-between'}>
            <Grid item>
              <NavLink to="/" activeClassName="is-active" exact={true}>
                <img src={homepage} width="120" alt=""/>
              </NavLink>
            </Grid>
            <Grid item className={classes.languageIcons} container direction ={'row'} justify={'center'} alignItems={'right'} alignContent={'right'}>
              <Grid item>
                <FormControl >
                Langueage
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          
          defaultValue='Greek'
          onChange={handleChange}
        >
          <MenuItem className={classes.gr} selected={true} value={"Greek"}>Greek</MenuItem>
          <MenuItem className={classes.en} value={"English"}>English</MenuItem>
        </Select>
      </FormControl>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>  
          <Grid item>
            <Typography variant="h3" className={classes.title}>
              Η διασπορά των έργων της Ακρόπολης
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    <AppBar position="static" className={classes.menubar}>
      <Toolbar variant="dense">
        <nav className={classes.nav}>
          <NavLink to="/" activeClassName={classes.activeMenu} className={classes.navLink} exact={true}>Αρχική</NavLink>
          <NavLink to="/me-mia-matia" activeClassName={classes.activeMenu} className={classes.navLink} exact={true}>Με
            μια ματιά</NavLink>
          <NavLink to="/mouseia" activeClassName={classes.activeMenu} className={classes.navLink}
                   exact={true}>Μουσεία</NavLink>
          <NavLink to="/istories" activeClassName={classes.activeMenu} className={classes.navLink}
                   exact={true}>Ιστορίες</NavLink>
          <NavLink to="/euretirio" activeClassName={classes.activeMenu} className={classes.navLink}
                   exact={true}>Ευρετήριο</NavLink>
          <NavLink to="/xronologio" activeClassName={classes.activeMenu} className={classes.navLink}
                   exact={true}>Χρονολόγιο</NavLink>
        </nav>
      </Toolbar>
    </AppBar>
  </div>
};

export default Header;
