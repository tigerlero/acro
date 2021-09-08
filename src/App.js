import React, { Fragment } from "react";
import NotFoundPage from 'pages/NotFoundPage';
import { BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import Museums from 'pages/Museums';
import Euretirio from 'pages/Euretirio';
import Istories from 'pages/Istories';
import HomePage from 'pages/HomePage';
import MeMiaMatia from 'pages/MeMiaMatia';
import Xronologio from 'pages/Xronologio';
import RootView from "pages/RootView";
import MuseumId from "pages/MuseumId";
import About from "pages/About";
import ContainerView from "pages/ContainerView";
import DataStreamView from "pages/DataStreamView";
import { routes } from "./routes";
import { HOME_PAGE } from "./config";
import AppRoute from "./routes/route";
import MouseioMesa from "components/MouseioMesa";
import Exhibits from "pages/Exhibits";
function App() {
  return (<React.Fragment>
    <BrowserRouter basename={HOME_PAGE}>
    
      <Switch>
      
      <Route path="/" component={HomePage} exact={true} />
        <Route path="/me-mia-matia" component={MeMiaMatia} exact={true} />
        <Route path="/Museums" component={Museums} exact={true} />
        <Route path="/museum/:id" component={MuseumId} exact={true} />
        <Route path="/exhibits/:id" component={Exhibits} exact={true} />
        <Route path="/istories" component={Istories} exact={true} />
        <Route path="/euretirio" component={Euretirio} exact={true}/>
        <Route path="/xronologio" component={Xronologio} exact={true}/>
        <Route path="/repox" component={RootView} exact={true} />
        <Route path="/mouseio" component={MouseioMesa} exact={true}/>
        <Route path="/datastreams/:id" component={DataStreamView } />
        <Route path="/containers/:id" component={ContainerView } />
        <Route path="/about" component={About} exact={true}/>
        <Route component={NotFoundPage} />
        
        
        
      
      </Switch>

    </BrowserRouter>
</React.Fragment>
  );
}

export default App;
