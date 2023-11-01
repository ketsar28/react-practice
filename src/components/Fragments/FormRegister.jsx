import { InputForm } from "../Elements/Input/Index";
import { Button } from "../Elements/Button/Button";

export const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Name"
        type="text"
        placeholder="input your name here..."
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="email@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="****"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="****"
        name="confirmPassword"
      />

      <Button text="Sign In" variant="bg-green-600 w-full" />
    </form>
  );
};
