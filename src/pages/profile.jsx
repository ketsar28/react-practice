import { Button } from "../components/Elements/Button/Button";
import { useLogin } from "../hooks/useLogin";

export const ProfilePage = () => {
  const handleProduct = () => {
    window.location.href = "/products";
  };
  const username = useLogin();
  return (
    <div className="w-full flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-teal-600 font-bold text-3xl underline">Profile </h1>
      <h2 className="text-2xl font-semibold my-5">Username : {username}</h2>
      <Button variant="bg-teal-600" text="Back To Product Page" onClick={handleProduct}/>
    </div>
  );
};
