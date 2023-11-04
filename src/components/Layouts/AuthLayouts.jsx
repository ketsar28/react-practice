/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthNavigation } from "../Elements/AuthNavigation/AuthNavigation";
import { DarkMode } from "../../context/DarkMode";

export const AuthLayouts = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <div
      className={`flex justify-center min-h-screen items-center flex-col py-10 ${
        isDarkMode && "bg-slate-800 text-white"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className={`absolute right-2 top-2 p-2 text-white rounded-xl font-bold bg-slate-800 ${isDarkMode && "bg-green-800"}`}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-green-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-5">
          Welcome, please enter your detail
        </p>
        {children}
        <AuthNavigation type={type} />
      </div>
    </div>
  );
};
