import React from 'react'
import { connect } from 'react-redux'
import { ProductsList } from '../components/ProductsList'
import { incrementCount, setFilter } from '../actions/ProductsListActions'

class BasketListContainer extends React.Component {

    render() {
        const { products, filter, incrementCount, setFilter} = this.props

        return (
            <ProductsList
                data = {products}
                onCountIncrement = {incrementCount}
                onTextChange = {setFilter}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        products: store.productsListData.products,
        filter: store.productsListData.filter,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementCount: id => dispatch(incrementCount(id)),
        setFilter: id => dispatch(setFilter(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BasketListContainer)