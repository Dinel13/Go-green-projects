import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Loading from "./components/loading/Loading";
import NotifModal from "./components/modal/NotifModal";
import OurTeam from "./components/ourTeam/OurTeam";
import Testimonial from "./components/testimonial/Testimonial";

const Feedback = React.lazy(() => import("./pages/Fedback"));
const ForgotPassword = React.lazy(() => import("./pages/ForgotPassword"));
const Login = React.lazy(() => import("./pages/Login"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Recycle = React.lazy(() => import("./pages/Recycle"));
const Signup = React.lazy(() => import("./pages/Register"));
const ResetPassword = React.lazy(() => import("./pages/ResetPassword"));

function App() {
  return (
    <>
      <Header />
      <NotifModal />
      <main>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact>
              <Hero />
              <OurTeam />
              <Testimonial />
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
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

export default App;
