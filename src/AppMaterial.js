import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Main from "./Mcomponents/Main";
import Header from "./Mcomponents/Header";
import Footer from "./Mcomponents/Footer";
import MShop from "./Mcomponents/MShop/MShop";
import MAdminPanel from "./Mcomponents/MAdminPanel/MAdminPanel";
import MCheckout from './Mcomponents/MShop/MCheckout/MCheckout';

const AppMaterial = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/shop" component={MShop} />
          <Route path="/admin" component={MAdminPanel} />
          <Route path="/checkout" component={MCheckout} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

// move firebase functions into firebaseService component
// order summary in dialog component

export default AppMaterial;
