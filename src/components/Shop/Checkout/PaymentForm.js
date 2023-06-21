import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Płatność
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Imię" fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Numer karty"
            fullWidth
            autoComplete="cc-number"
            type="number"
            min={0}
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 16);
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Data wygaśnięcia karty" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="3 cyfry na odwrocie karty"
            fullWidth
            autoComplete="cc-csc"
            type="number"
            min={0}
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 3);
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
