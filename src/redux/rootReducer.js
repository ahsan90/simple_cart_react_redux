import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import prodcutReducer from './product/productReducer'

const rootReducer = combineReducers({
    cart: cartReducer,
    product: prodcutReducer,
});

export default rootReducer;
