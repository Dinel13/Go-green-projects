import { Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import NotifModal from "./components/modal/NotifModal";
import Login from "./pages/Login";
import Signup from "./pages/Register";

function App() {
  return (
    <>
      <Header />
      <NotifModal />
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="*">tere </Route>
      </Switch>
    </>
  );
}

export default App;
