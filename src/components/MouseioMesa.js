import Header from './Header';
import {theme} from 'theme'
import {Container, Grid, Card, MuiThemeProvider, Collapse, IconButton} from '@material-ui/core'
import {Component} from 'react';
import React, {useEffect, useState } from 'react';
import AliceCar from './AliceCar';
import '../assets/carousel.min.css';
import {ExpandLess, ExpandMore} from '@material-ui/icons'
import {Button} from '@material-ui/core';
import {withStyles, makeStyles,} from '@material-ui/core/styles';
import ArtTrack from '@material-ui/icons/ArtTrack';

import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import {NavLink} from 'react-router-dom';

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
 textDecor: {
  alignItems: 'center',
  textAlign: 'center',
  marginTop: theme.spacing(2),
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  height: '200px',
  overflowY: 'scroll',
  lineHeight: '180%'
},
title: {
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
 
 textAlign:'center',
},
descr:{
 paddingBottom:'40px',
 paddingTop:'20px',
 textAlign:'center',
 width:'35%',
 fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
 marginLeft: 'auto',
 marginRight: 'auto',
},
cardpad:{
 padding: 0,
 margin: 0,
 paddingBottom: 0,

},
back:{
 paddingTop:'10px',
 paddingLeft:'50px',
}

}));


function MouseioMesa(){
  const classes = useStyles();
  const [expanded,setExpanded] = useState(false)
  const handleDragStart = (e) => e.preventDefault();
    const items = [
        <img width="100%" height="666px" alt="" src='http://www.talent.gr/demos/acropolis/diaspora/p4-1-1.jpg' onDragStart={handleDragStart} />,
        <img width="100%" height="666px" alt="" src='http://www.talent.gr/demos/acropolis/diaspora/p4-1-2.jpg' onDragStart={handleDragStart}/>,
        <img width="100%" height="666px" alt="" src='http://www.talent.gr/demos/acropolis/diaspora/p4-1-3.jpg' onDragStart={handleDragStart}/>,
      ];
    return(
      <MuiThemeProvider theme={theme}>
        <Header/>
        <Grid alignContent="center" alignItems="center" item>
          <div className={classes.back}>
          <NavLink  to="/mouseia" activeClassName={classes.activeMenu} className={classes.navLink}
          exact={true}>
          <BootstrapButton variant="contained" color="primary" 
          startIcon={<ArrowBackIos />}
        >
          Πίσω
        </BootstrapButton></NavLink></div></Grid>
        <Container alignContent="center" alignItems="center" style={{marginTop: 20}}>
        <AliceCar items={items}/>
        <Grid container
              direction="row-reverse"
              justifyContent="center"
              alignItems="baseline">
          <Grid alignContent="center" alignItems="center" item>
          <div className={classes.back}>
          <NavLink  to="/mouseia" activeClassName={classes.activeMenu} className={classes.navLink}
          exact={true}>
          <BootstrapButton variant="contained" color="primary" 
          endIcon={<ArtTrack />}
        >
          Εκθέματα
        </BootstrapButton></NavLink></div></Grid>
          <Grid item className={classes.textDecor}>
              <p>Η αγάπη για τις ελληνικές αρχαιότητες και η επιθυμία για την ιδιοποίησή τους έχει ξεκινήσει ήδη από τα
                ρωμαϊκά χρόνια (Σύλλας 86 π.Χ., ).
                Το πάθος για την ελληνική τέχνη οδήγησε πολλές φορές όχι μόνο στην αντιγραφή σπουδαίων γλυπτών αλλά και
                στη διαρπαγή των ίδιων των έργων.
                Η έμφυτη τάση της κατοχής/ιδιοκτησίας έστω και ενός μικρού θραύσματος αρχαίου έργου και ιδίως από την
                Ακρόπολη,
                τον κατεξοχήν αντιπροσωπευτικό χώρο της κλασικής εποχής,
                εκδηλώθηκε στο πρόσωπο των αξιωματούχων και στρατιωτών του Μοροζίνι όταν το 1687,
                μετά την ανατίναξη του Παρθενώνα πολλά κομμάτια του γλυπτού διακόσμου του μνημείου βρέθηκαν εκτεθειμένα
                στο έδαφος.</p>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <p>
                Βρήκε επίσης την έκφρασή της στο πρόσωπο των περιηγητών και διπλωματών οι οποίοι,
                μετά την έκδοση των σχεδίων της Ακρόπολης από τους Stuart και Revett στο β μισό του 18ου αι.
                και την κατά συνέπεια γνωριμία του ευρωπαϊκού κόσμου με την ελληνική αρχιτεκτονική και γλυπτική,
                ταξίδεψαν στην Ελλάδα,
                επισκέφθηκαν την Ακρόπολη και επέστρεψαν στις πατρίδες τους με ένα ενθύμιο
                άλλοτε ως δείγμα θαυμασμού για την ελληνική τέχνη και άλλοτε ως σύμβολο κύρους και επίδειξης.
                Την ίδια πρακτική ακολούθησαν και οι απλοί επισκέπτες ανά τους αιώνες.
                Αυτό το ίδιο χαρακτηριστικό της ανθρώπινης φύσης έγινε όπλο στα χέρια αρχαιοκάπηλων που επιδόθηκαν στην
                παράνομη διακίνηση αρχαιοτήτων με σκοπό το εύκολο κέρδος
                γεγονός που οδήγησε στο να ληφθεί μέριμνα για την προστασία των πολιτιστικών αγαθών στην Ελλάδα ήδη από
                τα χρόνια της Επανάστασης
                (διάταγμα του Υπουργού Εσωτερικών (10-2-1825) της κυβερνήσεως των επαναστατών ορίζεται να
                περισυλλέγονται οι αρχαιότητες και να φυλάσσονται στα σχολεία,
                ενώ το Σύνταγμα της Τροιζήνας (άρθρο ιη΄) ορίζει ότι «ο Διοικητής χρεωστεί να φροντίζη να μήν πωλώνται ή
                να μη μεταφέρωνται εκτός της επικρατείας οι Αρχαιότητες».
                Έπειτα, στο νεοσύστατο Ελληνικό Κράτος ο Κυβερνήτης Ιωάννης Καποδίστριας εξέδωσε την υπ’ αριθ.
                2400/12-5-1828
                διαταγή με την οποία απαγόρευσε την εξαγωγή αρχαιοτήτων από την ελληνική επικράτεια και όρισε «να
                παραχωρώνται
                κατά προτίμησιν εις την Κυβέρνησιν» ) αλλά και σε Ευρωπαϊκό επίπεδο (νομοθεσία, Unesco).
                Παράλληλα με την αύξηση της ανασκαφικής δραστηριότητας στην Ακρόπολη κατά τα μέσα του 19 ου αι.
                δημιουργείται η ανάγκη φύλαξης των ευρημάτων και δεδομένου ότι η Ακρόπολη κατά την περίοδο αυτή
                δε διαθέτει τους κατάλληλους χώρους τα αντικείμενα μεταφέρονται στο Εθνικό Αρχαιολογικό Μουσείο.
                Αποτέλεσμα των παραπάνω ενεργειών είναι η απογύμνωση μνημείων συχνά με συνέπειες στη δομική ακεραιότητά
                τους,
                η διασπορά των αρχαίων της Ακρόπολης που εντάχθηκαν σε συλλογές των μουσείων της Αθήνας και της Ευρώπης
                αλλά
                και σε ιδιωτικές συλλογές ανά τον κόσμο, η γένεση ιδεολογικών αντιπαραθέσεων καθώς
                και η αφαίρεση της δυνατότητας ολοκληρωμένης παρουσίασης του υλικού στο σύνολό του
                και καλύτερη κατανόησή του. Που βρίσκονται αντικείμενα: Αγγλία, Γαλλία, Αυστρία, Αμερική, Δανία,
                Γερμανία, Ιταλία, Σουηδία και σε άλλα μουσεία της Αθήνα
              </p>
              </Collapse>
          </Grid>
          <Grid item>
            <IconButton title={expanded?'Λιγότερα':'Περισσότερα'} onClick={()=>setExpanded(!expanded)}>
              {expanded?<ExpandLess/>:<ExpandMore/>}
            </IconButton>
          </Grid>
        </Grid>
      </Container>
        
          
        </MuiThemeProvider>
      );
}

export default MouseioMesa;
