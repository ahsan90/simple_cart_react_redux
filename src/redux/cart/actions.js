import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
} from "./actionTypes";

// Add to Cart action
export const add_to_cart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    };
};
export const AddToCart = (product) => {
    return (dispatch) => {
        return dispatch(add_to_cart(product));
    };
};

// Remove from  cart action
export const remove_from_cart = (cartItem) => {
    return {
        type: REMOVE_FROM_CART,
        payload: cartItem
    };
};

export const removeFromCart = (cartItem) => {
    return (dispatch) => {
        return dispatch(remove_from_cart(cartItem))
    }
}

// Increase quantity action
export const increase_quantity = (product) => {
    return {
        type: INCREASE_QUANTITY,
        payload: product,
    };
};

export const increaseQuantity = (product) => {
    return (dispatch) => {
        return dispatch(increase_quantity(product));
    };
};

// Decrease Quantity
export const decrease_quantity = (product) => {
    return {
        type: DECREASE_QUANTITY,
        payload: product,
    };
};

export const decreaseQuantity = (product) => {
    return (dispatch) => {
        return dispatch(decrease_quantity(product));
    };
};
