import { Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route>
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
