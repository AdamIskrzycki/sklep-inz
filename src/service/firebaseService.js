import { db } from "../firebase";

export const getProducts = (updatedProducts) => {
  return db.collection("products").get()
};

export const addNewProduct = (name, price, discountedPrice, image) => {
  db.collection("products")
    .add({
      name: name,
      price: +price,
      discountedPrice: discountedPrice === "" ? null : +discountedPrice,
      image: image,
    })
    .then(getProducts);
};

export const deleteProduct = (id) => {
  return db.collection("products").doc(id).delete().then(getProducts);
};

export const updateProduct = (id, name, price, discountedPrice, image) => {
  return db
    .collection("products")
    .doc(id)
    .set({
      name: name,
      price: +price,
      discountedPrice: discountedPrice === "" ? null : +discountedPrice,
      image: image,
    })
    .then(getProducts);
  // this.setState({product: undefined});
};
