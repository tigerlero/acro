import React, { Fragment } from "react";
import NotFoundPage from 'pages/NotFoundPage';
import { BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import Diaspora from 'pages/Diaspora';
import Mouseia from 'pages/Mouseia';
import Euretirio from 'pages/Euretirio';
import Istories from 'pages/Istories';
import HomePage from 'pages/HomePage';
import MeMiaMatia from 'pages/MeMiaMatia';
import Xronologio from 'pages/Xronologio';
import RootView from "pages/RootView";
import AcroEkthemata from "pages/AcroEkthemata";
import About from "pages/About";
import ContainerView from "pages/ContainerView";
import DataStreamView from "pages/DataStreamView";
import { routes } from "./routes";
import { HOME_PAGE } from "./config";
import AppRoute from "./routes/route";
function App() {
  return (<React.Fragment>
    <BrowserRouter basename={HOME_PAGE}>
    
      <Switch>
      
      <Route path="/" component={HomePage} exact={true} />
        <Route path="/me-mia-matia" component={MeMiaMatia} exact={true} />
        <Route path="/diaspora" component={Diaspora} exact={true} />
        <Route path="/mouseia" component={Mouseia} exact={true} />
        <Route path="/acropolis" component={AcroEkthemata} exact={true} />
        <Route path="/istories" component={Istories} exact={true} />
        <Route path="/euretirio" component={Euretirio} exact={true}/>
        <Route path="/xronologio" component={Xronologio} exact={true}/>
        <Route path="/repox" component={RootView} exact={true} />
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
