import React, { Component } from 'react';
import { connect } from 'react-redux'
import textStrings from '../data/textStrings.json'
import { ProductsList } from "../components/ProductsList"
import { BasketList } from "../components/BasketList"
import { setBasketVisible } from "../actions/commonDataActions"
import './App.css';

class App extends Component {

    basketButtonClkHandler = () => {
        this.props.setBasketVisible(true);
    }

    productListButtonClkHandler = () => {
        this.props.setBasketVisible(false);
    }

  render() {
      const {showBasket, visibleProducts, basketProducts} = this.props

      if(showBasket){
          return (
              <React.Fragment>
                  <h1>{textStrings.basket}</h1>
                  <BasketList data = {basketProducts}
                              onCountDecrement = {this.onCountDecrement}
                              onClearCount = {this.onClearCount}
                  />
                  <button onClick = {this.productListButtonClkHandler}>{textStrings.productsList}</button>
                  <button onClick = {this.clearBasketButtonClkHandler}>{textStrings.clearBasket}</button>
              </React.Fragment>
          )
      }

      {/*filterValue = {this.state.filterValue}*/}

      return (
          <React.Fragment>
              <h1>Products list</h1>
              <ProductsList
                  data = {visibleProducts}
                  onCountIncrement = {this.onCountIncrement}
                  onTextChange = {this.onTextChange}

              />
              <button onClick = {this.basketButtonClkHandler}>{textStrings.basket}</button>
          </React.Fragment>
      )
  }
}

const mapStateToProps = store => {
    return{
        showBasket: store.commonData.showBasket,
        visibleProducts: store.products.visibleProducts,
        basketProducts: store.products.basketProducts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBasketVisible: showBasket => dispatch(setBasketVisible(showBasket))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
