/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { Button } from "../Elements/Button/Button";

export const ProductCard = (props) => {
  const { children } = props;
  return (
      <div className="w-full max-w-xs bg-slate-700 border-700 border-gray-200 rounded-lg shadow flex justify-between flex-col">
        {children}
      </div>
  );
};

const Header = (props) => {
  const { image, alt = "product" } = props;
  return (
    <a href="#">
      <img
        src={image}
        alt={alt}
        className="p-8 rounded-t-lg max-h-60 min-w-full"
      />
    </a>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-8 p-3 h-full">
      <a href="">
        <h5 className="text-xl font-bold tracking-tighter text-green-500">
          {name}
        </h5>
        <p className="text-s text-justify text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-7 p-3">
      <span className="text-xl font-bold text-white">Rp. {price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</span>
      <Button variant="bg-green-600" text="Add" onClick={() => handleAddToCart(id)} />
    </div>
  );
};

ProductCard.Header = Header;
ProductCard.Body = Body;
ProductCard.Footer = Footer;
