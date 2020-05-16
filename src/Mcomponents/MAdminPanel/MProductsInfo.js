import React from "react";
import { Button, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: "10px",
    marginLeft: theme.spacing(2),
  },
}));

const MProductsInfo = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.box} mt={10}>
      <Typography variant="h4" align="center" color="textPrimary" paragraphvariant="h4" paragraph>
        Current stock:
      </Typography>
      <Typography variant="h5" align="center" color="textPrimary" paragraphvariant="h5" paragraph className="Caption">
        Name | Price | Discounted Price
      </Typography>
      <ul>
        {props.products &&
          props.products.map((product) => {
            return (
              <Typography variant="h6" align="center" color="textSecondary" paragraphvariant="h5" paragraph>
                {product.name} | ${product.price} {product.discountedPrice ? " | $" + product.discountedPrice : null}
                <Button
                  onClick={() => props.delete(product.id)}
                  variant="outlined"
                  color="primary"
                  size="small"
                  className={classes.button}
                >
                  Delete
                </Button>
              </Typography>
            );
          })}
      </ul>
    </Box>
  );
};

export default MProductsInfo;
