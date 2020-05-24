import React, { Component } from "react";
import { TextField, Button, Container, withStyles, Typography } from "@material-ui/core";

const styles = (theme) => ({
  addButton: {
    fontWeight: "500",
    display: "flex",
    margin: "auto",
    marginLeft: "40%",
    marginTop: theme.spacing(2),
    width: "15%",
  },
  container: {
    marginTop: theme.spacing(25),
  },

  textField: {
    width: "30%",
    margin: "3px",
    marginTop: theme.spacing(6),
  },
});

class MAdminPanelControls extends Component {
  state = {
    products: null,
    name: "",
    price: "",
    discountedPrice: "",
    isInputEmpty: true,
    isInEditMode: false,
  };

  onInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value, isInputEmpty: false });
  };

  onButtonClick = () => {
    if (this.state.isInEditMode) {
      this.props.update(this.state.name, this.state.price, this.state.discountedPrice, this.state.productId);
    } else {
      this.props.add(this.state.name, this.state.price, this.state.discountedPrice);
    }
    this.setState({ name: "", price: "", discountedPrice: "", isInputEmpty: true, isInEditMode: false });
    document.getElementById("focus").focus();
  };

  static getDerivedStateFromProps(props, state) {
    if (
      (props.product && !state.isInEditMode) ||
      (props.product && state.productId !== props.product.id) // uproscic warunek
    ) {
      return {
        name: props.product.name,
        price: props.product.price,
        discountedPrice: props.product.discountedPrice,
        productId: props.product.id,
        isInEditMode: true,
      };
    }
    return null;
  }

  render() {
    const { classes } = this.props;

    const inputProps = {
      step: "0.01",
      min: "0",
    };

    return (
      <React.Fragment>
        <Container maxWidth="sm" className={classes.container}>
          <Typography variant="h5" align="center" color="textSecondary" paragraphvariant="h5" paragraph>
            Please specify the properties below in order to add a new product to the stock.
          </Typography>
          <TextField
            value={this.state.name}
            onChange={this.onInputChange}
            name="name"
            id="focus"
            label="Name"
            variant="outlined"
            className={classes.textField}
            autoFocus
          />
          <TextField
            value={this.state.price}
            inputProps={inputProps}
            onChange={this.onInputChange}
            name="price"
            type="number"
            label="Price"
            variant="outlined"
            className={classes.textField}
          />
          <TextField
            value={this.state.discountedPrice}
            inputProps={inputProps}
            onChange={this.onInputChange}
            name="discountedPrice"
            type="number"
            label="Discounted Price"
            variant="outlined"
            className={classes.textField}
          />
          <Button
            disabled={this.state.isInputEmpty}
            variant="contained"
            color="primary"
            className={classes.addButton}
            onClick={this.onButtonClick}
          >
            {this.state.isInEditMode ? "Save" : "Add"}
          </Button>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(MAdminPanelControls);
