/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Button } from "../Elements/Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

export const ProductCard = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-slate-700 border-700 border-gray-200 rounded-lg shadow flex justify-between flex-col">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, alt = "product", id } = props;
  return (
    <Link to={`/products/${id}`}>
      <img
        src={image}
        alt={alt}
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </Link>
  );
};

const Body = (props) => {
  const { children, name, id } = props;
  return (
    <div className="px-8 p-3 h-full">
      <Link to={`/products/${id}`}>
        <h5 className="text-xl font-bold tracking-tighter text-green-500">
          {name.substring(0, 20)}...
        </h5>
        <p className="text-s text-justify text-white">
          {children.substring(0, 100)}...
        </p>
      </Link>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-7 p-3">
      <span className="text-xl font-bold text-white">
        $.{" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
      </span>
      <Button
        variant="bg-green-600"
        text="Add"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      />
    </div>
  );
};

ProductCard.Header = Header;
ProductCard.Body = Body;
ProductCard.Footer = Footer;
