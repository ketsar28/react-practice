/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Fragment, useEffect, useRef, useState } from "react";
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
    price: 150000,
  },
  {
    id: 2,
    image: "/img/product-2.jpg",
    alt: "laptop",
    name: "Mac Book Pro",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, a! Laborum asperiores iusto debitis amet omnis ad commodi reiciendis corporis.",
    price: 25500000,
  },
  {
    id: 3,
    image: "/img/product-3.jpg",
    alt: "smart watch",
    name: "Smart Watch 09",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, a! Laborum asperiores iusto debitis amet omnis ad commodi reiciendis corporis.",
    price: 9000000,
  },
];

const user = localStorage.getItem("email");

export const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // ! componentDidMount()
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  // ! componenetDidUpdate()
  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, current) => {
        const product = products.find((product) => product.id === current.id);
        return acc + product.price * current.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  const totalPriceRef = useRef(null);

  useEffect(() => {
    if(cart.length > 0) {
      totalPriceRef.current.style.display = "table-row"
    } else {
      totalPriceRef.current.style.display = "none"
    }
  } ,[cart])

  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty:1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

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
      <div className="flex py-5">
        <div className="xl:w-4/6 w-2/4 flex flex-wrap justify-center gap-5">
          {products.map((product, key) => (
            <ProductCard key={key}>
              <ProductCard.Header image={product.image} alt={product.alt} />
              <ProductCard.Body name={product.name}>
                {product.description}
              </ProductCard.Body>
              <ProductCard.Footer
                price={product.price}
                handleAddToCart={handleAddToCart}
                id={product.id}
              />
            </ProductCard>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="font-bold text-3xl text-green-600 ml-5 mb-3">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id == item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      Rp.{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp.{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {" "}
                    Rp.{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center mb-20">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};
