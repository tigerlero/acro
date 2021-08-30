// Authentication related pages

import RootView from "pages/RootView";
import About from "pages/About";
import ContainerView from "pages/ContainerView";
import DataStreamView from "pages/DataStreamView";
// Dashboard

const routes = [
  { path: "/about", component: About },
  { path: "/containers/:id", component: ContainerView },
  { path: "/datastreams/:id", component: DataStreamView },
  { path: "/repox", exact: true, component: RootView },
  
  
];

export { routes };
