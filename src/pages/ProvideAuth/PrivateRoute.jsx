import { Redirect, Route } from "react-router";
import UseAuth from "./UseAuth";

function PrivateRoute({ children, ...rest }) {
  let auth = UseAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
