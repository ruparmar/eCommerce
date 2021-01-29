import React from 'react';
import './global.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/header/header';
import HomePage from './pages/home/home';
import Product from './pages/product/product';
import Cart from './pages/cart/cart';
import Checkout from './pages/checkout/checkout';
import Order from './pages/order/order';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/order" component={Order} /> 
        </Switch>
      </Router>
    </>
  );
}

export default App;
