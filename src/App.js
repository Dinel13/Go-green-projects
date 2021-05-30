import { Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import NotifModal from "./components/modal/NotifModal";
import Feedback from "./pages/Fedback";
import Login from "./pages/Login";
import Signup from "./pages/Register";

function App() {
  return (
    <>
      <Header />
      <NotifModal />
      <Switch>
        <Route path="/" exact>
          <Hero />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/feedback" exact>
          <Feedback />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="*">tere </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
