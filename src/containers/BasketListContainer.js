import React from 'react'
import { connect } from 'react-redux'
import { BasketList } from '../components/BasketList'
import { decrementCount, clearCount } from '../actions/BasketListActions'

class BasketListContainer extends React.Component {

    render() {
        const { products, countDecrement, clearCount } = this.props
        
        return (
            <BasketList
                data = {products}
                onCountDecrement = {countDecrement}
                onClearCount = {clearCount}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        products: store.productsListData.products,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        decrementCount: id => dispatch(decrementCount(id)),
        clearCount: id => dispatch(clearCount(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BasketListContainer)