import { useContext } from "react";
import { DarkMode } from "../../../context/DarkMode";

export const Label = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, htmlFor } = props;

  const { isDarkMode } = useContext(DarkMode);
  return (
    <>
      <label
        htmlFor={htmlFor}
        className={`block text-slate-700 text-sm font-bold mb-3 ${
          isDarkMode && "text-white"
        }`}
      >
        {children}
      </label>
    </>
  );
};
