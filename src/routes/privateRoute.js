import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
import {auth} from '../firebase/authServices';

const PrivateRoute = (route) => {
  const user = auth.currentUser;
  return (

    <Route>
      {isLoaded(user) && !isEmpty(user) ? <route.component {...route.props} routes={route.routes} />:
      <Redirect to={{pathname: "/user/login",}}/>}
    </Route>
  );
};
export default PrivateRoute;