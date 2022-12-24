import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { useState, useEffect } from "react";

export default function Cart() {
  const { items } = useSelector((state) => state.cart);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    setTotalPrice(() => {
      const totalPrice = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      return totalPrice;
    });
    setTotalQuantity(() => {
      const totalPrice = items.reduce((sum, item) => sum + item.quantity, 0);
      return totalPrice;
    });
  }, [items]);

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        {items?.length > 0
          ? items.map((item) => <CartItem key={item.id} item={item} />)
          : <p className="items-center text-center">Your Cart is empty</p>}

        {items?.length > 0 && (
          <>
            <div className="flex justify-center items-center text-center">
              <div className="text-xl font-semibold">
                <p>Total Item</p>
                <p className="text-5xl">{items?.length}</p>
              </div>
            </div>
            <div className="flex justify-center items-center text-center">
              <div className="text-xl font-semibold">
                <p>Total Quantity</p>
                <p className="text-5xl">{totalQuantity}</p>
              </div>
            </div>
          </>
        )}
      </div>
      {items?.length > 0 && (
        <>
          <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div className="flex justify-center items-center text-center">
              <div className="text-xl font-semibold">
                <p>Total Price</p>
                <p className="text-5xl">{totalPrice}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
