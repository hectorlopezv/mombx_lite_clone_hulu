import React from "react";
import { Route, Redirect } from "react-router-dom";
//handle redirection if login! custom hook
//AUTHENTICACTION RECOMMENDED REACT ROUTER DOOM
//Login --> signin --> HOMEPAGE

const IsUserRedirect = ({ user, loggedInPath, children, ...props }: any) => {
  //check if user object exists ...State
  return (
    <Route
      {...props}
      render={() => {
      // console.log("dentro del user redirect", user);
        //what to render if user is in store.. localstorage
        if (user === null || user.length === 2 || user.length === 0) {
         // console.log("bebe");
          return children; //render page or component ... user props
        }

        if (user) {
          //if user already logged redirect to Browse page
    //      console.log("im here");
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
};

export default IsUserRedirect;

export const ProtectedRoute = ({ user, children, ...props }: any) => {
  return (
    <Route
      {...props}
      render={({ location }: any) => {
        //comes from history

        if (user === "") {
          return (
            <Redirect
              to={{
                pathname: "signin",
                state: { from: location }, //from ... to
              }}
            />
          );
        }

        if (user) {
          //return children if user exists
          return children;
        }
        return null;
      }}
    />
  );
};
