import React, { useReducer } from "react";
import { CryptoAction } from "./actions";
import cryptoReducer from "./reducer";
import CryptoProps from "./CryptoProps";
import initialCrypto from "./initialCrypto";

export const CryptoState = React.createContext<CryptoProps | undefined>(
  undefined
);

export const CryptoDispatch = React.createContext<
  React.Dispatch<CryptoAction> | undefined
>(undefined);

export default function CryptoProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [state, dispatch] = useReducer(cryptoReducer, initialCrypto);
  return (
    <CryptoState.Provider value={state}>
      <CryptoDispatch.Provider value={dispatch}>
        {children}
      </CryptoDispatch.Provider>
    </CryptoState.Provider>
  );
}

export const useCryptoState = (): CryptoProps => {
  const context = React.useContext(CryptoState);
  if (undefined === context) {
    throw new Error("Please use within CryptoStateProvider");
  }
  return context;
};

export const useCryptoDispatch = (): React.Dispatch<CryptoAction> => {
  const context = React.useContext(CryptoDispatch);
  if (undefined === context) {
    throw new Error("Please use within CryptoDispatchProvider");
  }
  return context;
};
