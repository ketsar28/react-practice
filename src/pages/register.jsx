import { Link } from "react-router-dom";
import { FormRegister } from "../components/Fragments/FormRegister";
import { AuthLayouts } from "../components/Layouts/AuthLayouts";

export const RegisterPage = () => {
  return (
    <AuthLayouts title="Sign Up">
      <FormRegister />
      <p className="text-md text-center mt-5">
        Have an account ?{" "}
        <Link to="/login" className="font-bold text-green-600">
          Sign In
        </Link>
      </p>
    </AuthLayouts>
  );
};
