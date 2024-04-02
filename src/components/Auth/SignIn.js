import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

import { auth } from "../../store/actions";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  invalid: {
    border: "2px solid #FF0000",
    borderRadius: "6px",
  },
});

class SignIn extends Component {
  state = {
    controls: {
      email: {
        value: "",
      },
      password: {
        value: "",
      },
    },
  };

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
      },
    };
    this.setState({ controls: updatedControls });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, true);
  };

  render() {
    const { classes } = this.props;
    let form = (
      <form className={classes.form} onSubmit={this.submitHandler}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="E-mail address"
          name="email"
          autoFocus
          value={this.state.controls.email.value}
          onChange={(event) => this.inputChangedHandler(event, "email")}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={this.state.controls.password.value}
          onChange={(event) => this.inputChangedHandler(event, "password")}
        />

        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
          Sign in
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/signup" variant="body2">
              {"Don't have an account? Sign up!"}
            </Link>
          </Grid>
        </Grid>
      </form>
    );

    if(this.props.loading) {
      form = <CircularProgress />
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {form}
        </div>
        <Box mt={8}></Box>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignedUp) => dispatch(auth(email, password, isSignedUp)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignIn));
