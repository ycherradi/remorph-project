import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import CampaignBrowser from "./components/Home";
import OneCampaign from "./components/OneCampaign";
import PostCampaign from "./components/PostCampaign";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <CampaignBrowser />
          </Route>
          <Route path='/campaign/:id'>
            <OneCampaign />
          </Route>
          <Route path='/post'>
            <PostCampaign />
          </Route>
        </Switch> 
      )}
      <Footer isLoaded={isLoaded}/>
    </>
  );
}

export default App;