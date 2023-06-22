import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default function PaymentForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Płatność
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Imię"
            fullWidth
            autoComplete="cc-name"
            name="name"
            value={props.paymentFormData.name}
            onChange={props.handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Numer karty"
            name="cardNumber"
            fullWidth
            autoComplete="cc-number"
            type="number"
            min={0}
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 16);
            }}
            value={props.paymentFormData.cardNumber}
            onChange={props.handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Data wygaśnięcia karty"
            fullWidth
            autoComplete="cc-exp"
            name="expirationDate"
            value={props.paymentFormData.expirationDate}
            onChange={props.handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            name="cvv"
            helperText="3 cyfry na odwrocie karty"
            fullWidth
            autoComplete="cc-csc"
            type="number"
            min={0}
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 3);
            }}
            value={props.paymentFormData.cvv}
            onChange={props.handleInputChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
