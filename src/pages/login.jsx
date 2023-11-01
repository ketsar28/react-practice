import { FormLogin } from "../components/Fragments/FormLogin";
import { AuthLayouts } from "../components/Layouts/AuthLayouts";

export const LoginPage = () => {
  return (
    <AuthLayouts title="Sign In">
      <FormLogin />
    </AuthLayouts>
  );
};
