import React, {Fragment,  useMemo} from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useCommonStyles } from "../components/styles";
import ContainerCard from "../components/ContainerCard";
import LinearProgress from "@material-ui/core/LinearProgress";
import Alert from "@material-ui/lab/Alert";
//import ContainerBreadCrumb from "../components/ContainerBreadCrumb";
import {useFetch} from '../helpers/hooks'
import {Endpoint} from '../constants/enums'

const RootView = () => {
  const classes = useCommonStyles();
  const test = useFetch(`${Endpoint.containers}/52e73b8d-9f53-45b1-a6a6-6adfd80d7b18?datastream=aca8faf1-458f-42cb-a4b4-5321eba60a76`,[]);
  const [xthesLoading,xthesResult,xthesError] = useFetch(`${Endpoint.containers}/52e73b8d-9f53-45b1-a6a6-6adfd80d7b18`,[]);
  
  const isLoading = useMemo(()=>{
    try{
      return !!(xthesLoading);
    }
    catch (e){
      return false
    }
  },[xthesLoading])

  const error = useMemo(()=>{
    try{
      if (xthesError)
        return true
    }
    catch (e){
      return false
    }
  },[xthesError])

  const result = useMemo(()=>{
    try{
      if (xthesResult.uuid)
      {
        return [xthesResult]
      }
    }
    catch (e){
      console.log(e)
      return []
    }
  },[xthesResult])


  return (
    <Fragment>
      {/*<div className={classes.heroContent}>*/}
      {/*  <Container maxWidth="md">*/}
      {/*    <Grid item xs={12} container justify={"flex-start"}>*/}
      {/*      <ContainerBreadCrumb path={[]}/>*/}
      {/*    </Grid>*/}
      {/*  </Container>*/}
      {/*</div>*/}
      <LinearProgress
        style={{ visibility: isLoading ? "visible" : "hidden" }}
      />
      <Container className={classes.cardGrid} maxWidth="md">
        {error && (
          <Alert severity="error" style={{ marginBottom: 16 }}>
            {error}
          </Alert>
        )}
        {/* End hero unit */}
        <Grid container spacing={4}>
          {result && result.map((container, index) => (
            <Grid item key={index} xs={12} sm={4} md={4}>
              <ContainerCard container={container} />
            </Grid>
          ))}
{test}
        </Grid>
      </Container>
    </Fragment>
  );
};

export default RootView;
