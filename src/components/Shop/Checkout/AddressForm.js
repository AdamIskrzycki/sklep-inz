import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Adres dostawy
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField required id="firstName" name="firstName" label="Imię" fullWidth autoComplete="given-name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="lastName" name="lastName" label="Nazwisko" fullWidth autoComplete="family-name" />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="address1" name="address1" label="Adres do dostawy" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField required type='email' id="email" name="email" label="Adres e-mail" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="city" name="city" label="Miasto" fullWidth autoComplete="shipping address-level2" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="Województwo" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Kod pocztowy"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="country" name="country" label="Kraj" fullWidth autoComplete="shipping country" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
