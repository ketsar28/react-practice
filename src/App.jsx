// eslint-disable-next-line no-unused-vars
import { LoginPage } from "./Pages/login";
import { RegisterPage } from "./Pages/register";


function App() {
  return (
    <div className="flex justify-center min-h-screen items-center flex-col py-10">
      <RegisterPage />
      {/* <LoginPage /> */}
    </div>
  );
}

export default App;
