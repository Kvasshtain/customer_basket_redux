import React, { Component } from 'react';
import { connect } from 'react-redux'
import textStrings from '../data/textStrings.json'
import ProductsListContainer from './ProductsListContainer'
import BasketListContainer from './BasketListContainer'
import { setBasketVisible } from '../actions/commonDataActions'
import { clearBasket } from '../actions/BasketListActions'
import './App.css';

class App extends Component {

    basketButtonClkHandler = () => {
        this.props.setBasketVisible(true);
    }

    productListButtonClkHandler = () => {
        this.props.setBasketVisible(false);
    }

    clearBasketButtonClkHandler = () => {
        this.props.clearBasket();
    }

  render() {
      const {showBasket} = this.props

      if(showBasket){
          return (
              <React.Fragment>
                  <h1>{textStrings.basket}</h1>
                  <BasketListContainer/>
                  <button onClick = {this.productListButtonClkHandler}>{textStrings.productsList}</button>
                  <button onClick = {this.clearBasketButtonClkHandler}>{textStrings.clearBasket}</button>
              </React.Fragment>
          )
      }

      return (
          <React.Fragment>
              <h1>Products list</h1>
              <ProductsListContainer/>
              <button onClick = {this.basketButtonClkHandler}>{textStrings.basket}</button>
          </React.Fragment>
      )
  }
}

const mapStateToProps = store => {
    return{
        showBasket: store.commonData.showBasket,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBasketVisible: showBasket => dispatch(setBasketVisible(showBasket)),
        clearBasket: () => dispatch(clearBasket()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
