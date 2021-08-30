import Header from '../components/Header';

import {Container, Grid, Card, MuiThemeProvider} from '@material-ui/core'
import {theme} from 'theme'
function Euretirio(){
    return(
      <MuiThemeProvider theme={theme}>
        <Header/>
          <Container style={{marginTop:20}}>
          <Grid container>
            <Grid item>ΕΥΡΕΤΗΡΙΟ</Grid>
            <Grid item></Grid>
            <Grid item></Grid>
            <Grid item></Grid>
        </Grid>
        </Container>
      </MuiThemeProvider>);
}

export default Euretirio;
