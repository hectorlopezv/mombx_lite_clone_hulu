import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import IsUserRedirect, { ProtectedRoute } from "./utils/redirections/routes";
import Home from "./pages/Home";
import * as ROUTES from "./Routes";
function App() {
  return (
    <Router>
      <Switch>
        {/* <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          exact={true}
        >
          <SignIn />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          exact={true}
        >
          <SignUp />
        </IsUserRedirect>

        <ProtectedRoute user={user} path={ROUTES.BROWSE} exact={true}>
          <Browse />
        </ProtectedRoute> */}
        <IsUserRedirect
          user={null}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact={true}
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
