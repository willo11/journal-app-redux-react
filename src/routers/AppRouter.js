import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import {firebase} from '../firebase/firebase-config'

import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggeIn, setIsLoggeIn] = useState(false);

  useEffect(() => {
    
    firebase.auth().onAuthStateChanged((user)=> {
      if (user?.uid) {
        dispatch(login (user.uid, user.displayName))
        setIsLoggeIn(true);
      }else{
        setIsLoggeIn(false);
      }
      setChecking(false);
    })

  }, [dispatch, setChecking, setIsLoggeIn])

  if (checking) {
      return (
        <h1> Wait...</h1>
      ) 
  }


  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute isAuthenticated={isLoggeIn} path="/auth" component={ AuthRouter } />
          <PrivateRoute exact isAuthenticated={isLoggeIn} path="/" component={ JournalScreen } />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
