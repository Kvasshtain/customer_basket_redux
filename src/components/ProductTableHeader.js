import React from 'react'
import textStrings from '../data/textStrings.json'

const ProductTableHeader = () => {
    return (
        <tr>
            <th>{textStrings.name}</th>
            <th>{textStrings.price}</th>
            <th>{textStrings.count}</th>
        </tr>
    )
}

export { ProductTableHeader }