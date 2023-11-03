/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Button } from "../Elements/Button/Button";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const username = useLogin();
  // mengambil data product yang ada di cart
  const cart = useSelector((state) => state.cart.data);
  const [totalCart, setTotalCart] = useState(0);

  // ! componentDidMount = merubah value sebelumnya ketika terjadi event
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleProfile = () => {
    window.location.href = "/profiles";
  };

  return (
    <div className="flex justify-end h-20 items-center bg-green-500 px-10 gap-5">
      <span className="text-white font-bold">{username}</span>
      <Button variant="bg-teal-800" text="Profile" onClick={handleProfile} />
      <Button variant="bg-red-600" text="Sign Out" onClick={handleLogout} />
      <div className="flex items-center p-3 font-bold rounded-full bg-slate-900 text-white">
        {totalCart}
      </div>
    </div>
  );
};
