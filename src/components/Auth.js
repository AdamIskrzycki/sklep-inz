import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

import { logout } from "../store/actions";

const styles = (theme) => ({
  button: {
    marginLeft: "10px",
    borderLeft: "1px dotted white",
    fontWeight: "500",
  },
  auth: {
    marginLeft: "auto",
  },
});

class Auth extends Component {
  render() {
    const { classes } = this.props;
    
    let nav = (
      <div className={classes.auth}>
        <Button variant="text" color="inherit" component={Link} to={"/signin"}>
          Sign In
        </Button>
        <Button className={classes.button} variant="text" color="inherit" component={Link} to={"/signup"}>
          Sign Up
        </Button>
      </div>
    );

    if (this.props.isAuthenticated) {
      
      nav = (
        <>
        <Button className={classes.auth} variant="text" color="inherit" component={Link} to={"/"} onClick={this.props.onLogout}>
          Logout
        </Button>
        <Redirect to="/"/>
        </>
      );
    }
      
    return nav;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.idToken !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(logout()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Auth));
