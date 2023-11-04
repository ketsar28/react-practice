import { InputForm } from "../Elements/Input/Index";
import { Button } from "../Elements/Button/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/login.service";

export const FormLogin = () => {
  const [errors, setErrors] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(user, (status, response) => {
      if (status) {
        console.log(response);
        localStorage.setItem("token", response);
        window.location.href = "/products";
      } else {
        setErrors(response.response.data);
        console.log(response.response.data);
      }
    });

    // ! localStorage.setItem("email", e.target.email.value);
    // ! localStorage.setItem("password", e.target.password.value);
    // ! window.location.href = "/products";

    // ! console.log(e.target.email.value);
    // ! console.log(e.target.password.value);
    console.log("login");
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="Ketsar Ali"
        name="username"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="****"
        name="password"
      />

      <Button text="Sign In" variant="bg-green-600 w-full" type="submit" />

      {errors && (
        <p className="text-center m-3 font-bold text-red-600">{errors}</p>
      )}
    </form>
  );
};
