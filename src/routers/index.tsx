import React from "react";
import { Switch } from "react-router-dom";

import { MainLayout } from "../layouts";
import { About, Blog, Destinations, Home, Tour } from "../pages";
import { PublicRouter } from "./PublicRouter";

export const Routers = () => {

  return (
    
      <Switch>
        <PublicRouter exact component={Home} layout={MainLayout} path="/"/>
        <PublicRouter  component={About} layout={MainLayout} path="/About"/>
        <PublicRouter  component={Destinations} layout={MainLayout} path="/Destinations"/>
        <PublicRouter  component={Tour} layout={MainLayout} path="/Tours"/>
        <PublicRouter  component={Blog} layout={MainLayout} path="/Blog"/>
        <PublicRouter  component={Home} layout={MainLayout} path="/ContactUs"/>
        
      </Switch>
    
  );
};
