import React from "react";
import { Button, Grid, Card, Typography, CardActions, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  product: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  productMedia: {
    paddingTop: "56.25%",
  },
  productContent: {
    flexGrow: 1,
  },
}));

const MProduct = (props) => {
  const classes = useStyles();

  return (
    <Grid item key={props.id} xs={12} sm={6} md={4}>
      <Card className={classes.product}>
        <CardMedia className={classes.productMedia} image="https://source.unsplash.com/random" title={props.name} />
        <CardContent className={classes.productContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography>{props.display(props.price, props.discountedPrice)}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="outline" size="small" color="primary" align="center">
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MProduct;
