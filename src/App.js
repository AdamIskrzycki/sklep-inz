import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Shop from "./components/Shop/Shop";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Checkout from "./components/Shop/Checkout/Checkout";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import { connect } from "react-redux";
import * as actions from "./store/actions";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  
  render() {

    let routes = (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/shop" component={Shop} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Redirect to="/"></Redirect>
      </Switch>
    );

    if (this.props.isAdmin) {
      routes = (
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/shop" component={Shop} />
          <Route path="/admin" component={AdminPanel} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Redirect to="/"></Redirect>
        </Switch>
      );
    }

    return (
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <main>{routes}</main>
        {/* <Footer /> */}
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAdmin: state.userId === "43PfXhmZ3aSah3Q32cB0A99vbiH2",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);