import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Paper, Stepper, Step, StepLabel, Button, Typography } from "@material-ui/core";
import AddressForm from './AddressForm';
import PaymentForm from "./PaymentForm";
import Review from "./Review";

import { connect } from 'react-redux'
import { groupBy } from  '../../../utils';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Adres dostawy", "Płatność", "Podsumowanie zamówienia"];


const Checkout = (props) => {
  const classes = useStyles();
  const grouped = groupBy(props.cartProducts, "id").sort((a, b) => a.name.localeCompare(b.name));
  const totalPrice = props.cartProducts.reduce(
    (acc, product) => (product.discountedPrice ? acc + product.discountedPrice : acc + product.price),
    0
  );
  const mapped = grouped.map((product) => {
    return (product.name + " | x " + product.count + " | " + (product.discountedPrice ? product.discountedPrice : product.price) + "zł\n");
  })

  const productListEmail = mapped.join("");

  const [activeStep, setActiveStep] = useState(0);

  const [addressFormData, setAddressFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  });

  const [paymentFormData, setPaymentFormData] = React.useState({
    name: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleAddressInputChange = (e) => {
    const { name, value } = e.target;
    setAddressFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

  }

  const handlePaymentInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleNext = (e) => {
    e.preventDefault();
    setActiveStep(activeStep + 1);

    const serviceId = "service_x4uy50m";
    const templateId = "template_1y1qs4j";

    if(activeStep === 2) {
      sendMail(serviceId, templateId, {
        to_name: addressFormData.name,
        to_email: addressFormData.email,
        products: productListEmail,
        totalPrice: "Całkowita cena: " + totalPrice + "zł",
      })
    }
  };

  const sendMail = (serviceId, templateId, variables) => {
    window.emailjs.send(
      serviceId, templateId, variables
    ).then(res => {
      console.log("Your message has been sent successfully")
    }).catch(err => console.log(err));
  }

  const handleBack = (e) => {
    e.preventDefault();
    setActiveStep(activeStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm addressFormData={addressFormData} handleInputChange={handleAddressInputChange}/>;
      case 1:
        return <PaymentForm paymentFormData={paymentFormData} handleInputChange={handlePaymentInputChange}/>;
      case 2:
        return <Review />;
      default:
        throw new Error("Nieprawidłowy krok");
    }
  }


  return (
    <React.Fragment>
      <form onSubmit={handleNext}>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Zamówienie
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Dziękujemy za Twoje zamówienie!
                </Typography>
                <Typography variant="subtitle1">
                  Twoje zamówienie zostało prawidłowo zarejestrowane, potwierdzenie realizacji zamówienia zostanie przesłane
                  na adres e-mail podany przy finalizowaniu zamówienia. <br></br>W razie jakichkolwiek pytań, proszę o kontakt drogą mailową na adres: skleponline@gmail.com.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Wróć
                    </Button>
                  )}
                  <Button type="submit" variant="contained" color="primary" className={classes.button} >
                    {activeStep === steps.length - 1 ? "Złóż zamówienie" : "Dalej"}
                  </Button>
                </div>
              </React.Fragment>
            )}
            
          </React.Fragment>
        </Paper>
      </main>
      </form>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cartProducts,
  };
};

export default connect(mapStateToProps)(Checkout);
