import { useEffect, useState } from "react";
import { getUsername } from "../services/product.service";

export const useLogin = () => {
  const [username, setUsername] = useState("");
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

  return username;
};
