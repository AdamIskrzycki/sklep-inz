import React, {Component} from 'react';
import Products from '../../components/Products/Products';
import { Route } from 'react-router-dom';
import AdminPanel from '../AdminPanel/AdminPanel';


class Shop extends Component {
    render() {
        return (
            <React.Fragment>
                <Route path='/' exact component={Products}></Route>
                <Route path='/admin' exact component={AdminPanel}></Route>
            </React.Fragment>
        );
    }
}

export default Shop;