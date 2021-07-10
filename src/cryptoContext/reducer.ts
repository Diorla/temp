import { CryptoAction, CryptoActionTypes } from "./actions";
import CryptoProps from "./CryptoProps";
import initialCrypto from "./initialCrypto";

export default function cryptoReducer(
  state: CryptoProps,
  action: CryptoAction
): CryptoProps {
  if (action.type === CryptoActionTypes.UPDATE_CRYPTO)
    return { ...state, ...action.payload };
  if (action.type === CryptoActionTypes.REMOVE_CRYPTO) return initialCrypto;
  return state;
}
