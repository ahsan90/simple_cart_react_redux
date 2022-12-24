import { useDispatch, useSelector } from "react-redux";
import { AddToCart, increaseQuantity } from "../redux/cart/actions";
import { toast } from "react-toastify";
import { decrease_stock } from "../redux/product/actions";

export default function ProductItem({ product }) {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const newCartItem = {
      id: product.id,
      itemName: product.productName,
      price: product.price,
      quantity: 1,
    };
    
    const existingItem = items.filter((item) => item.id === product.id)
    if (existingItem.length > 0) {
      if(product.quantity === 0) return toast.error('Item stock out')
      dispatch(increaseQuantity(newCartItem));
    } else {
      dispatch(AddToCart(newCartItem));
    }
    dispatch(decrease_stock(product.id))
  };

  return (
    <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
      <div className="flex justify-between px-4 items-center">
        <div className="text-lg font-semibold">
          <p>{product.productName + " (" + product.quantity + ")"}</p>
          <p className="text-gray-400 text-left">
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "BDT",
            })}
          </p>
        </div>
        <div className="text-lg font-semibold">
          <button
            className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
            onClick={() => handleAddToCart(product)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
