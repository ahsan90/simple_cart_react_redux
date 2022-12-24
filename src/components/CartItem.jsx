import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/cart/actions";
import { toast } from "react-toastify";
import { decrease_stock, getProduct, increase_stock, reset_product } from "../redux/product/actions";

export default function CartItem({ item }) {
  const { items } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleIncreaseQ = (itemId) => {
    const existingCartItem = items.filter((item) => item.id === itemId);
    const productItem = products.filter((prod) => prod.id === itemId);

    if (existingCartItem.length > 0) {
      /* console.log(
        existingCartItem[0].quantity + " vs " + productItem[0].quantity
      ); */
      if (productItem[0].quantity === 0) {
        return toast.error("Item stock out");
      }
      dispatch(
        increaseQuantity({
          id: item.id,
          itemName: item.itemName,
          price: item.price,
          quantity: 1,
        })
      );
      dispatch(decrease_stock(productItem[0].id));
    }
  };

  const handleDecreaseQ = (itemId) => {
    const existingCartItem = items.filter((item) => item.id === itemId);

    if (existingCartItem.length > 0) {
      if (existingCartItem[0].quantity === 0) {
        //dispatch(removeFromCart(existingCartItem[0]));
        //dispatch(increase_stock(itemId))
        return toast.error("Please add quantity");
      }
      dispatch(
        decreaseQuantity({
          id: item.id,
          itemName: item.itemName,
          price: item.price,
          quantity: 1,
        })
      );
    }
    dispatch(increase_stock(itemId))
  };

  const handleRemoveItem = (itemToBeRemoved) => {
    console.log(itemToBeRemoved)
    dispatch(removeFromCart(itemToBeRemoved));
    dispatch(reset_product(itemToBeRemoved))
  };
  return (
    <div className="flex justify-between border-b-2 mb-2">
      <div className="text-lg py-2">
        <p>{item.itemName}</p>
      </div>
      <div className="text-lg py-2">
        <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
          <button
            className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
            onClick={() => handleDecreaseQ(item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 12H6"
              />
            </svg>
          </button>
          <p>{item.quantity}</p>
          <button
            className={`focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center`}
            onClick={() => handleIncreaseQ(item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>

          <button
            className="focus:outline-none bg-red-700 hover:bg-red-800 text-white py-1 px-3 rounded-full inline-flex items-center"
            onClick={() => handleRemoveItem(item)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
