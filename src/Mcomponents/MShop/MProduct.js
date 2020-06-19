import React from "react";
import { Button, Card, Typography, CardActions, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  product: {
    display: "flex",
    flexDirection: "column",
  },
  productMedia: {
    paddingTop: "56.25%",
  },
  productContent: {
    flexGrow: 1,
  },
  regularPriceCrossed: {
    fontSize: "20px",
    fontWeight: "500",
    textDecoration: "line-through",
    color: "grey",
  },
  discountedPrice: {
    fontSize: "30px",
    color: "red",
    marginLeft: "30px",
  },
  regularPrice: {
    fontSize: "27px",
  },
}));

const MProduct = (props) => {
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
              <span className={classes.regularPriceCrossed}>{"$" + props.data.price}</span>
              <span className={classes.discountedPrice}>{"only $" + props.data.discountedPrice}</span>
            </>
          ) : (
            <span className={classes.regularPrice}>{"$" + props.data.price}</span>
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" size="small" color="primary" align="center" onClick={() => props.onBuy(props.data)}>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};

export default MProduct;
