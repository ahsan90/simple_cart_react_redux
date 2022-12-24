import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_products } from "../redux/product/actions";
//import productlisting from '../models/Products'

export default function ProductList() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_products());
  }, []);

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
      {products?.length > 0 ? (
        <>
          {products.map((prod) => (
            <ProductItem key={prod.id} product={prod} />
          ))}
        </>
      ) : (
        <p>No product available</p>
      )}
    </div>
  );
}
