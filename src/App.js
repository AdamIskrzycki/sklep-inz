import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product';



class App extends React.Component {
  state = {
    products: [
      { name: "Woda", price: 2, discountedPrice: 1.5 },
      { name: "Chleb", price: 2.5, discountedPrice: 2 },
      { name: "Ser żółty", price: 4.59, discountedPrice: 3 }
    ]
  }

 addToCart = (product) => {
    alert("Adding product to cart");
  }

render() {
  return (
  <div className="App">
    <h1>Welcome to my shop!</h1>
    <Product
      name={this.state.products[0].name}
      price={this.state.products[0].price}
      discountedPrice={this.state.products[0].discountedPrice}
      addToCart={this.addToCart}/>
  </div>
);

}


}
export default App;