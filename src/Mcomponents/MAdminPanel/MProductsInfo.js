import React from "react";
import {
  Box,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  icon: {
    cursor: "pointer",
  },
}));

const MProductsInfo = (props) => {
  const classes = useStyles();

  return (
    <Box mt={10} ml={10}>
      <Typography variant="h5" align="center" color="textSecondary" paragraphvariant="h5" paragraph>
        Current Stock
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="center">Price ($) </TableCell>
              <TableCell align="center">Discounted Price ($)</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.products &&
              props.products.map((product) => (
                <TableRow key={product.name}>
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="center">{product.price}</TableCell>
                  <TableCell align="center">{product.discountedPrice ? product.discountedPrice : " - "}</TableCell>
                  <TableCell align="center" onClick={() => props.delete(product.id)}>
                    <DeleteIcon className={classes.icon} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>

    // <Box mt={10}>
    //   <Typography variant="h4" align="center" color="textPrimary" paragraphvariant="h4" paragraph>
    //     Current stock:
    //   </Typography>
    //   <Typography variant="h5" align="center" color="textPrimary" paragraphvariant="h5" paragraph className="Caption">
    //     Name | Price | Discounted Price
    //   </Typography>
    //   <ul>
    //     {props.products &&
    //       props.products.map((product) => {
    //         return (
    //           <Typography variant="h6" align="center" color="textSecondary" paragraphvariant="h5" paragraph>
    //             {product.name} | ${product.price} {product.discountedPrice ? " | $" + product.discountedPrice : null}
    //             <Button
    //               onClick={() => props.delete(product.id)}
    //               variant="outlined"
    //               color="primary"
    //               size="small"
    //               className={classes.button}
    //             >
    //               Delete
    //             </Button>
    //           </Typography>
    //         );
    //       })}
    //   </ul>
    // </Box>
  );
};

export default MProductsInfo;
