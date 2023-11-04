/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { ProductCard } from "../components/Fragments/ProductCard";
import { getProduct, getUsername } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import { TableCart } from "../components/Fragments/TableCart";
import { Navbar } from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

export const ProductPage = () => {
  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProduct] = useState([]);
  const {isDarkMode} = useContext(DarkMode);
  useLogin();


  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  // const totalPriceRef = useRef(null);

  // ! componentDidMount()
  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  // ! componenetDidUpdate()
  // useEffect(() => {
  //   if (products.length > 0 && cart.length > 0) {
  //     const sum = cart.reduce((acc, current) => {
  //       const product = products.find((product) => product.id === current.id);
  //       return acc + product.price * current.qty;
  //     }, 0);
  //     setTotalPrice(sum);
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  // }, [cart, products]);

  // useEffect(() => {
  //   if (cart.length > 0) {
  //     totalPriceRef.current.style.display = "table-row";
  //   } else {
  //     totalPriceRef.current.style.display = "none";
  //   }
  // }, [cart]);

  useEffect(() => {
    getProduct((data) => {
      console.log(data);
      setProduct(data);
    });
  }, []);

  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  // const handleAddToCart = (id) => {
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { id, qty: 1 }]);
  //   }
  // };

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   window.location.href = "/login";
  // };
  return (
    <Fragment>
      <Navbar />
      <div className={`flex py-5 ${isDarkMode && "bg-slate-800"}`}>
        <div className="xl:w-4/6 w-2/4 flex flex-wrap justify-center gap-5">
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.id}>
                <ProductCard.Header
                  image={product.image}
                  alt={product.alt}
                  id={product.id}
                />
                <ProductCard.Body name={product.title} id={product.id}>
                  {product.description}
                </ProductCard.Body>
                <ProductCard.Footer price={product.price} id={product.id} />
              </ProductCard>
            ))}
        </div>
        <div className="w-2/5">
          <h1 className="font-bold text-3xl text-green-600 ml-5 mb-3">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center mb-20">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};
