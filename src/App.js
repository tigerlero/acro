import React from 'react';
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
import About from "pages/About";
import ContainerView from "pages/ContainerView";
import DataStreamView from "pages/DataStreamView";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/me-mia-matia" component={MeMiaMatia} exact={true} />
        <Route path="/diaspora" component={Diaspora} exact={true} />
        <Route path="/mouseia" component={Mouseia} />
        <Route path="/istories" component={Istories} />
        <Route path="/euretirio" component={Euretirio} />
        <Route path="/xronologio" component={Xronologio} />
        <Route component={NotFoundPage} />
        <Route path="/repox/" exact={true} component={RootView } />
        <Route path="/repox/datastreams/:id" component={DataStreamView } />
        <Route path="/repox/containers/:id" component={ContainerView } />
        <Route path="/repox/about" component={About}/>
      </Switch>

    </BrowserRouter>

  );
}

export default App;
