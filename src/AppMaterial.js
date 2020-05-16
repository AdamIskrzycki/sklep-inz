import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Main from "./Mcomponents/Main";
import Header from "./Mcomponents/Header";
import Footer from "./Mcomponents/Footer";
import MShop from "./Mcomponents/MShop/MShop";
import MAdminPanel from "./Mcomponents/MAdminPanel/MAdminPanel";
import MCart from "./Mcomponents/MCart/MCart";

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
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};


// edycja w admin panelu
// upload zdjęć
// przeniesienie metod firebasowych do osobnego pliku
// cart
// shop

export default AppMaterial;
