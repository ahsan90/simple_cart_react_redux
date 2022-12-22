import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
} from "./actionTypes";

const initialState = {
    items: [],
    name: "",
    price: null,
    total_price: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        }
        case REMOVE_FROM_CART: {
            return {
                ...state,
                items: [...state.items.filter(item => item.id !== action.payload.id)]
            };
        }
        case INCREASE_QUANTITY: {
            state.items.filter(item => {
                if (item.id === action.payload.id) {
                    item.quantity = item.quantity + action.payload.quantity
                }
            })

            return {
                ...state,
                items: [...state.items]
            };
        }
        case DECREASE_QUANTITY: {

            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id !== action.payload.id) {
                        return item
                    }
                    return {
                        ...item,
                        quantity: item.quantity - action.payload.quantity
                    }
                })
            };
        }
        default:
            return state
    }
};

export default cartReducer;
