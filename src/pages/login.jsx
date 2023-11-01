import { Link } from "react-router-dom";
import { FormLogin } from "../components/Fragments/FormLogin";
import { AuthLayouts } from "../components/Layouts/AuthLayouts";

export const LoginPage = () => {
  return (
    <AuthLayouts title="Sign In">
      <FormLogin />
      <p className="text-md text-center mt-5">
        Dont have an account ?{" "}
        <Link to="/register" className="font-bold text-green-600">
          Sign Up
        </Link>
      </p>
    </AuthLayouts>
  );
};
