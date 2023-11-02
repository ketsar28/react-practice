/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Fragment, useEffect, useRef, useState } from "react";
import { ProductCard } from "../components/Fragments/ProductCard";
import { Button } from "../components/Elements/Button/Button";
import { Counter } from "../components/Elements/Button/Counter";
import { getProduct, getUsername } from "../services/product.service";

export const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProduct] = useState([]);
  const [username, setUsername] = useState("");

  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  const totalPriceRef = useRef(null);

  // ! componentDidMount()
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
      console.log(setUsername(getUsername(token)));
    } else {
      console.log();
      window.location.href = "/login";
    }
  }, []);

  // ! componenetDidUpdate()
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, current) => {
        const product = products.find((product) => product.id === current.id);
        return acc + product.price * current.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  useEffect(() => {
    getProduct((data) => {
      console.log(data);
      setProduct(data);
    });
  }, []);

  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <Fragment>
      <div className="flex justify-end h-20 items-center bg-green-500 px-10 gap-5">
        <span className="text-white font-bold">{username}</span>
        <Button variant="bg-red-600" text="Sign Out" onClick={handleLogout} />
      </div>
      <div className="flex py-5">
        <div className="xl:w-4/6 w-2/4 flex flex-wrap justify-center gap-5">
          {products.length > 0 &&
            products.map((product, key) => (
              <ProductCard key={key}>
                <ProductCard.Header image={product.image} alt={product.alt} />
                <ProductCard.Body name={product.title}>
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
        <div className="w-2/5">
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
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id == item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 10)}...</td>
                      <td>
                        $.{" "}
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        $.{" "}
                        {(item.qty * product.price).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
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
                    $.{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
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
