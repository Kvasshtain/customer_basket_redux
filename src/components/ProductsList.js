import React from 'react'
import PropTypes from 'prop-types'
import { Product } from './Product'
import { ProductFinder } from './ProductFinder'
import { ProductTableHeader } from './ProductTableHeader'

class ProductsList extends React.Component {

    renderProductList = () => {
        const {data, onCountIncrement, filterValue} = this.props;

        if (data.length) {
            let visibleProducts,
                products = this.props.data;

            if (filterValue === ''){
                visibleProducts = products;
            } else {
                visibleProducts = products.filter(function (item) {
                    return item.name.includes(filterValue)
                });
            }

            return visibleProducts
                .map(function(item) {
                return (
                    <tbody key = {item.id}>
                    <Product data = {item} onCountIncrement = {onCountIncrement}/>
                    </tbody>
                )
            })
        }
        else {
            return (
                <tbody>
                <tr>
                    <td>Products list is empty</td>
                </tr>
                </tbody>
            )
        }
    }

    render() {
        const {onTextChange, filterValue} = this.props;

        return (
            <div className = "tableBorder">
                <table>
                    <tbody>
                    <ProductTableHeader/>
                    </tbody>
                    {this.renderProductList()}
                </table>
                <ProductFinder
                    onTextChange = {onTextChange}
                    filterValue = {filterValue}
                ></ProductFinder>
            </div>
        )
    }
}

ProductsList.propTypes = {
    data: PropTypes.array.isRequired
}

export { ProductsList }