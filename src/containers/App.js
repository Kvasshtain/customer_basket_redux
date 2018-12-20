import React, { Component } from 'react';
import { connect } from 'react-redux'
import textStrings from '../data/textStrings.json'
import ProductsListContainer from './ProductsListContainer'
import BasketListContainer from './BasketListContainer'
import { clearBasket } from '../actions/BasketListActions'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { NotFound } from '../components/NotFound'
import './App.css';

class App extends Component {

    clearBasketButtonClkHandler = () => {
        this.props.clearBasket();
    }

  render() {

      return (
      <React.Fragment>
          <BrowserRouter>
          <Switch>
              <Route path='/grocery_store/basket' children={()=>(
                  <React.Fragment>
                      <h1>{textStrings.basket}</h1>
                      <BasketListContainer/>
                      <Link to='/grocery_store/products'>
                          <button>{textStrings.productsList}</button>
                      </Link>
                      <button onClick = {this.clearBasketButtonClkHandler}>{textStrings.clearBasket}</button>
                  </React.Fragment>
              )}/>
              <Route path='/grocery_store/products' children={()=>(
                  <React.Fragment>
                      <h1>Products list</h1>
                      <ProductsListContainer/>
                      <Link to='/grocery_store/basket'>
                          <button>{textStrings.basket}</button>
                      </Link>
                  </React.Fragment>
              )}/>
              <Route component = {NotFound} />
          </Switch>
          </BrowserRouter>
      </React.Fragment>
      )
  }
}

const mapDispatchToProps = dispatch => {
    return {
        clearBasket: () => dispatch(clearBasket()),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(App);
