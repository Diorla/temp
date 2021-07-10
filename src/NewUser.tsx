import { ethers } from "ethers";
import { toast } from "react-toastify";
import { useCryptoDispatch } from "./cryptoContext";
import { updateCrypto } from "./cryptoContext/actions";
import getBalance from "./getBalance";
export declare const window: any;

export default function NewUser(): JSX.Element {
  const cryptoDispatch = useCryptoDispatch();
  const connect = async () => {
    if (window.ethereum) {
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    }
  };

  const createCrypto = () => {
    connect()
      .then(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        getBalance(provider)
          .then((balance) =>
            cryptoDispatch(
              updateCrypto({
                provider,
                balance,
                signer: provider.getSigner(),
              })
            )
          )
          .catch(() => toast.error("Error fetching balance"));
      })
      .catch(() => toast.error("Error connecting to crypto"));
  };

  return (
    <div className="center-wrapper new-user">
      <p>Please connect to Ethereum</p>
      <button onClick={createCrypto}>Connect</button>
    </div>
  );
}
