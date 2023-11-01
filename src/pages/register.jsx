import { FormRegister } from "../components/Fragments/FormRegister";
import { AuthLayouts } from "../components/Layouts/AuthLayouts";

export const RegisterPage = () => {
  return (
    <AuthLayouts title="Sign Up" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};
