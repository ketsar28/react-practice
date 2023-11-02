import { InputForm } from "../Elements/Input/Index";
import { Button } from "../Elements/Button/Button";
import { useEffect, useRef } from "react";

export const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products";
    // ! console.log(e.target.email.value);
    // ! console.log(e.target.password.value);
    console.log("login");
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        placeholder="email@gmail.com"
        name="email"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="****"
        name="password"
      />

      <Button text="Sign In" variant="bg-green-600 w-full" type="submit" />
    </form>
  );
};
