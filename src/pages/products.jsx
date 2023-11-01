/* eslint-disable react/jsx-key */
import { Fragment } from "react";
import { ProductCard } from "../components/Fragments/ProductCard";
import { Button } from "../components/Elements/Button/Button";
import { Counter } from "../components/Elements/Button/Counter";

const products = [
  {
    id: 1,
    image: "/img/product-1.jpg",
    alt: "shirt",
    name: "New Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, a! Laborum asperiores iusto debitis amet omnis ad commodi reiciendis corporis. Quo et modi qui cupiditate suscipit, consectetur voluptas officiis eius?",
    price: "Rp. 150.000",
  },
  {
    id: 2,
    image: "/img/product-2.jpg",
    alt: "laptop",
    name: "Mac Book Pro",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, a! Laborum asperiores iusto debitis amet omnis ad commodi reiciendis corporis.",
    price: "Rp. 25.500.000",
  },
  {
    id: 3,
    image: "/img/product-3.jpg",
    alt: "smart watch",
    name: "Smart Watch 09",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, a! Laborum asperiores iusto debitis amet omnis ad commodi reiciendis corporis.",
    price: "Rp. 9.000.000",
  },
];

const user = localStorage.getItem("email");

export const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <Fragment>
      <div className="flex justify-end h-20 items-center bg-green-500 px-10 gap-5">
        <span className="text-white font-bold">{user}</span>
        <Button variant="bg-red-600" text="Sign Out" onClick={handleLogout} />
      </div>
      <div className="flex justify-center py-5 flex-wrap gap-5">
        {products.map((product, key) => (
          <ProductCard key={key}>
            <ProductCard.Header image={product.image} alt={product.alt} />
            <ProductCard.Body name={product.name}>
              {product.description}
            </ProductCard.Body>
            <ProductCard.Footer price={product.price} />
          </ProductCard>
        ))}
      </div>

      <div className="flex justify-center">
        <Counter></Counter>
      </div>
    </Fragment>
  );
};
