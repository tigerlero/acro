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

  const [xthesLoading,xthesResult,xthesError] = useFetch(`${Endpoint.containers}/608784e7-005c-474f-8e3c-de00ca30c601`,[]);
  const [simeraLoading,simeraResult,simeraError] = useFetch(`${Endpoint.containers}/ffdd9a98-5622-4950-b8ba-316f0ea47ffe`,[]);
  const [avrioLoading,avrioResult,avrioError] = useFetch(`${Endpoint.containers}/a7aeeb39-12aa-4467-b632-c862eb372738`,[]);
  const [xthes15Loading,xthes15Result,xthes15Error] = useFetch(`${Endpoint.containers}/7fa01343-3bfc-4ad5-9716-241891c47d1d`,[]);
  const [simera15Loading,simera15Result,simera15Error] = useFetch(`${Endpoint.containers}/0da2616e-551c-41c9-b0a7-68e07efa9573`,[]);
  const [avrio15Loading,avrio15Result,avrio15Error] = useFetch(`${Endpoint.containers}/0e7a38f0-3505-4636-90cc-3606e9d1a2f9`,[]);
  const [xthesKidsLoading,xthesKidsResult,xthesKidsError] = useFetch(`${Endpoint.containers}/c10b2a77-2e51-4f2a-b468-cf8d5b6d42d1`,[]);
  const [simeraKidsLoading,simeraKidsResult,simeraKidsError] = useFetch(`${Endpoint.containers}/6ea06da2-12ed-40c6-96b5-0caaa15e5070`,[]);
  const [avrioKidsLoading,avrioKidsResult,avrioKidsError] = useFetch(`${Endpoint.containers}/079371f8-c9b7-4738-aa8e-fcb71177f1f6`,[]);

  const isLoading = useMemo(()=>{
    try{
      return !!(avrioLoading || xthesLoading || simeraLoading || xthes15Loading || simera15Loading || avrio15Loading || xthesKidsLoading || simeraKidsLoading || avrioKidsLoading);
    }
    catch (e){
      return false
    }
  },[avrioLoading,xthesLoading,simeraLoading,avrio15Loading,xthes15Loading,simera15Loading,avrioKidsLoading,xthesKidsLoading,simeraKidsLoading])

  const error = useMemo(()=>{
    try{
      if (avrioError || xthesError || simeraError || xthes15Error || simera15Error || avrio15Error || xthesKidsError || simeraKidsError || avrioKidsError)
        return true
    }
    catch (e){
      return false
    }
  },[avrioError,xthesError,simeraError,avrio15Error,xthes15Error,simera15Error,avrioKidsError,xthesKidsError,simeraKidsError])

  const result = useMemo(()=>{
    try{
      if (avrioResult.uuid && xthesResult.uuid && simeraResult.uuid && xthes15Result.uuid && simera15Result.uuid &&  avrio15Result.uuid && xthesKidsResult.uuid && simeraKidsResult.uuid && avrioKidsResult.uuid)
      {
        return [xthesResult,simeraResult,avrioResult,xthes15Result,simera15Result,avrio15Result,xthesKidsResult,simeraKidsResult,avrioKidsResult]
      }
    }
    catch (e){
      console.log(e)
      return []
    }
  },[xthesResult,simeraResult,avrioResult,xthes15Result,simera15Result,avrio15Result,xthesKidsResult,simeraKidsResult,avrioKidsResult])


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
        </Grid>
      </Container>
    </Fragment>
  );
};

export default RootView;
