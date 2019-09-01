import React, {Component} from 'react';
import './App.css';
import Shop from './containers/Shop/Shop';



class App extends Component {
  

render() {
  return (
  <div className="App">
    <h1>Welcome to my shop!</h1>
    <Shop />
  </div>
);

}


}
export default App;