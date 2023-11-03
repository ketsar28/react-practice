/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useReducer } from "react";

const TotalPriceContext = createContext(null);
const TotalPriceDispatchContext = createContext(null);

const totalPriceReduser = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }
    default:
      throw Error(`Unknown action : ${action.type}`);
  }
};

export const TotalPriceProvider = ({ children }) => {
  const [totalPrice, dispatch] = useReducer(totalPriceReduser, { total: 0 });

  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
};

export const useTotalPrice = () => {
  return useContext(TotalPriceContext);
};

export const useTotalPriceDispatch = () => {
  return useContext(TotalPriceDispatchContext);
};
