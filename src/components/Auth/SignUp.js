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

import { auth } from "../../store/actions";
import { CircularProgress } from "@material-ui/core";

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
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.isEmail) {
      const pattern = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true,
      },
    };
    this.setState({ controls: updatedControls });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, false);
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
          label="Adres e-mail"
          name="email"
          autoFocus
          value={this.state.controls.email.value}
          invalid={!this.state.controls.email.valid}
          shouldvalidate={this.state.controls.email.validation}
          touched={this.state.controls.email.touched}
          onChange={(event) => this.inputChangedHandler(event, "email")}
          color={!this.state.controls.email.valid && this.state.controls.email.touched ? "secondary" : "primary"}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Hasło"
          type="password"
          id="password"
          value={this.state.controls.password.value}
          invalid={!this.state.controls.password.valid}
          shouldvalidate={this.state.controls.password.validation}
          touched={this.state.controls.password.touched}
          onChange={(event) => this.inputChangedHandler(event, "password")}
          color={!this.state.controls.password.valid && this.state.controls.password.touched ? "secondary" : "primary"}
        />
      </form>
    );

    if (this.props.loading) {
      form = <CircularProgress />;
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Zarejestruj się
          </Typography>
          {form}
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
          Zarejestruj się
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                {"Masz już konto? Zaloguj się!"}
              </Link>
            </Grid>
          </Grid>
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
    onAuth: (email, password) => dispatch(auth(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignIn));
