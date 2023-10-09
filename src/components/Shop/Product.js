import React from "react";
import { Button, Card, Typography, CardActions, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import * as actionCreators from '../../store/actions';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => ({
  product: {
    display: "flex",
    width: '300px',
    margin: '20px',
    flexDirection: "column",
    '@media (max-width: 1200px)': {
      margin: '20px',
    }
  },
  productMedia: {
    paddingTop: "56.25%",
  },
  productContent: {
    flexGrow: 1,
    textAlign: "center",
  },
  regularPriceCrossed: {
    fontSize: "26px",
    fontWeight: "500",
    textDecoration: "line-through",
    color: "grey",
  },
  discountedPrice: {
    fontSize: "26px",
    color: 'salmon',
    marginLeft: "30px",
  },
  regularPrice: {
    fontSize: "26px",
  },
  buyButton: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const Product = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.product}>
      <CardMedia
        className={classes.productMedia}
        image={props.data.image ? props.data.image : "/images/nophoto.jpg"}
        title={props.data.name}
      />
      <CardContent className={classes.productContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.data.name}
        </Typography>
        <Typography>
          {props.data.discountedPrice ? (
            <>
              <span className={classes.regularPriceCrossed}>{props.data.price + "zł"}</span>
              <span className={classes.discountedPrice}>{props.data.discountedPrice + "zł"}</span>
            </>
          ) : (
            <span className={classes.regularPrice}>{props.data.price + "zł"}</span>
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={classes.buyButton}
          variant="outlined"
          size="medium"
          color="primary"
          align="center"
          onClick={() => props.onAddProduct(props.data)}
        >
          Kup
        </Button>
      </CardActions>
    </Card>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddProduct: (product) => dispatch(actionCreators.add(product))
  }
}


export default connect(null, mapDispatchToProps)(Product);
