import CryptoProps from "./CryptoProps";

export enum CryptoActionTypes {
  UPDATE_CRYPTO = "UPDATE_CRYPTO",
  REMOVE_CRYPTO = "REMOVE_CRYPTO",
}

export type CryptoAction = {
  type: CryptoActionTypes;
  payload?: CryptoProps;
};

export function updateCrypto(crypto: CryptoProps): {
  type: CryptoActionTypes;
  payload: CryptoProps;
} {
  return {
    type: CryptoActionTypes.UPDATE_CRYPTO,
    payload: crypto,
  };
}

export function removeCrypto(): { type: CryptoActionTypes } {
  return {
    type: CryptoActionTypes.REMOVE_CRYPTO,
  };
}
