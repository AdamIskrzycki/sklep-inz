import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function AddressForm(props) {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Adres dostawy
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField required id="firstName" name="name" label="Imię" fullWidth autoComplete="given-name" value={props.addressFormData.name} onChange={props.handleInputChange}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="lastName" name="lastname" label="Nazwisko" fullWidth autoComplete="family-name" value={props.addressFormData.lastname} onChange={props.handleInputChange}/>
        </Grid>
        <Grid item xs={12}>
          <TextField type="email" id="email" name="email" label="Adres e-mail" fullWidth value={props.addressFormData.email} onChange={props.handleInputChange}/>
        </Grid>
        <Grid item xs={12}>
          <TextField required id="address1" name="address" label="Adres do dostawy" fullWidth value={props.addressFormData.address} onChange={props.handleInputChange}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="city" name="city" label="Miasto" fullWidth autoComplete="shipping address-level2" value={props.addressFormData.city} onChange={props.handleInputChange}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="Województwo" fullWidth value={props.addressFormData.state} onChange={props.handleInputChange}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type="text"
            id="zip"
            name="zipcode"
            label="Kod pocztowy"
            fullWidth
            autoComplete="shipping postal-code"
            value={props.addressFormData.zipcode} onChange={props.handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="country" name="country" label="Kraj" fullWidth autoComplete="shipping country" value={props.addressFormData.country} onChange={props.handleInputChange}/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
