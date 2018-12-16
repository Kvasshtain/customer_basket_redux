import jsonProducts from '../data/products.json'

let products = jsonProducts.map(function (product) {
    product.price = +product.price;
    product.count = +product.count;
    return product;
});

const initialState = {
    allProducts: products,
    basketProducts: products,
    visibleProducts: products,
}

export function productsReducer(state = initialState) {
    return state
}