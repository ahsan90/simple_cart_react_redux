import { DECREASE_STOCK, GET_PRODUCT, GET_PRODUCTS, INCREASE_STOCK, RESET_PRODUCT } from "./actionTypes";
import productListing from "../product_data";

export const get_products = () => {
    return {
        type: GET_PRODUCTS,
        payload: productListing,
    };
};

export const get_product = (id) => {
    return {
        type: GET_PRODUCT,
        payload: id,
    };
};

export const getProduct = (id) => {
    return (dispatch) => {
        return dispatch(get_product(id));
    };
};

export const increase_stock = (productId) => {
    return {
        type: INCREASE_STOCK,
        payload: productId
    }
}

export const decrease_stock = (productId) => {
    return {
        type: DECREASE_STOCK,
        payload: productId
    }
}

export const reset_product = (productItem) => {
    return {
        type: RESET_PRODUCT,
        payload: productItem
    }
}
