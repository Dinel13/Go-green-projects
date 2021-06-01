import { Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import NotifModal from "./components/modal/NotifModal";
import OurTeam from "./components/ourTeam/OurTeam";
import Feedback from "./pages/Fedback";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Recycle from "./pages/Recycle";
import Signup from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <>
      <Header />
      <NotifModal />
      <Switch>
        <Route path="/" exact>
          <Hero />
          <OurTeam />
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
        <Route path="/recycle" exact>
          <Recycle />
        </Route>
        <Route path="/reset-password/:token" exact>
          <ResetPassword />
        </Route>
        <Route path="/forgot-password" exact>
          <ForgotPassword />
        </Route>
        <Route path="*">
          {" "}
          <NotFound />{" "}
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
