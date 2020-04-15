import * as Types from './../constants/ActionTypes';
var initialState = []
var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    })
    return result;
}
const products = (state = initialState, action) => {
    var index = -1;
    var { id, product } = action;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state]
        case Types.DELETE_PRODUCTS:
            console.log([...state]);
            index = findIndex(state, id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state];
        case Types.ADD_PRODUCTS:
            state.push(action.product);
            return [...state];
        case Types.UPDATE_PRODUCTS:
            index = findIndex(state, product.id);
            state[index] = product;
            return [...state];
        default: return [...state]
    }
}
export default products;