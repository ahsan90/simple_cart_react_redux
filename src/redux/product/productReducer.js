import { DECREASE_STOCK, GET_PRODUCT, GET_PRODUCTS, INCREASE_STOCK } from "./actionTypes";

const initialState = {
    products: [],
    product: null,
    price: null,
    quantity: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS: {
            return {
                ...state,
                products: action.payload,
            };
        }
        case GET_PRODUCT:
            //const foundProduct = state.products.filter(prod => prod.id === action.payload)
            return {
                ...state,
                product: state.products.filter((prod) => prod.id === action.payload),
            };

        case INCREASE_STOCK:
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id !== action.payload) {
                        return product;
                    }
                    return {
                        ...product,
                        quantity: product.quantity + 1,
                    };
                }),
            };
        case DECREASE_STOCK:
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id !== action.payload) {
                        return product;
                    }
                    return {
                        ...product,
                        quantity: product.quantity - 1,
                    };
                }),
            };
        default:
            return state;
    }
};

export default productReducer;
