import "./App.css";
import { useEffect, useState } from "react";
import sendTransact from "./sendTransact";
import { ethers } from "ethers";
import { useCryptoDispatch, useCryptoState } from "./cryptoContext";
import { toast } from "react-toastify";
import { updateCrypto } from "./cryptoContext/actions";
import getBalance from "./getBalance";
import Market from "./Market";
export declare const window: any;

export default function User(): JSX.Element {
  const cryptoState = useCryptoState();
  const cryptoDispatch = useCryptoDispatch();
  const [transactDetail, setTransactDetail] = useState({
    value: "",
    to: "",
  });
  const [openForm, setOpenForm] = useState(false);

  const readableBalance = ethers.utils.formatEther(cryptoState.balance);
  useEffect(() => {
    getBalance(cryptoState.provider)
      .then((balance) =>
        cryptoDispatch(updateCrypto({ ...cryptoState, balance }))
      )
      .catch(() => toast.error("Error fetching balance"));
  }, []);

  const transactFeedback = () => {
    getBalance(cryptoState.provider)
      .then((balance) =>
        cryptoDispatch(updateCrypto({ ...cryptoState, balance }))
      )
      .catch(() => toast.error("Error fetching balance"));
  };

  return (
    <div className="App">
      <div className="balance">
        <div className="balance-title">Current Balance</div>
        <div className="balance-value">{readableBalance}</div>
      </div>
      <div className="transfer">
        <button
          onClick={() => setOpenForm(!openForm)}
          className="transfer-toggle"
        >
          Transfer
        </button>
        {openForm && (
          <div className="form">
            <label htmlFor="address">Public address</label>
            <input
              id="address"
              type="text"
              value={transactDetail.to}
              placeholder="0x98bEB0896aBf357f32b0399c2810b93A350Ee9C0"
              onChange={(e) =>
                setTransactDetail({
                  ...transactDetail,
                  to: e.target.value,
                })
              }
            />
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              type="number"
              placeholder="20"
              value={transactDetail.value}
              onChange={(e) =>
                setTransactDetail({
                  ...transactDetail,
                  value: e.target.value,
                })
              }
            />
            <button
              className="submit-button"
              onClick={() =>
                sendTransact(
                  transactDetail,
                  cryptoState.signer,
                  transactFeedback
                )
              }
            >
              Send transaction
            </button>
          </div>
        )}
      </div>
      <Market />
    </div>
  );
}
