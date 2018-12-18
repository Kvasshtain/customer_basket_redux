import React from 'react'
import PropTypes from 'prop-types'
import { BasketProduct } from './BasketProduct'
import { BasketTableHeader } from './BasketTableHeader'
import { Total } from './Total'

class BasketList extends React.Component {

    renderBasketList = () => {
        const {onDecrementCount, onClearCount} = this.props;
        let basketListTemplate = this.props.data
            .filter(item => item.count)
            .map(function(item) {
                return (
                    <tbody key = {item.id}>
                    <BasketProduct data = {item}
                                   onCountDecrement = {onDecrementCount}
                                   onClearCount = {onClearCount}
                    />
                    </tbody>
                )
            });

        return basketListTemplate;
    }

    render() {
        return (
            <div className = "tableBorder">
                <table>
                    <tbody>
                    <BasketTableHeader/>
                    </tbody>
                    {this.renderBasketList()}
                </table>
                <Total data = {this.props.data}/>

            </div>
        )
    }
}

BasketList.propTypes = {
    data: PropTypes.array.isRequired
}

export { BasketList }