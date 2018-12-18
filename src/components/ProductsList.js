import React from 'react'
import PropTypes from 'prop-types'

class ProductsList extends React.Component {

    renderProductList = () => {
        const {data, onCountIncrement, filterValue} = this.props;

        if (data.length) {
            return this.props.data
                .filter(function (item) {
                    return item.name.includes(filterValue)
                })
                .map(function(item) {
                return (
                    <tbody key = {item.id}>
                    {/*<Product data = {item} onCountIncrement = {onCountIncrement}/>*/}
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
                    {/*<ProductTableHeader/>*/}
                    </tbody>
                    {this.renderProductList()}
                </table>
                {/*<ProductFinder
                    onTextChange = {onTextChange}
                    filterValue = {filterValue}
                ></ProductFinder>*/}
            </div>
        )
    }
}

ProductsList.propTypes = {
    data: PropTypes.array.isRequired
}

export { ProductsList }