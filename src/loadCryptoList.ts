import axios from "axios";
import { toast } from "react-toastify";
import currencyTypes from "./currencyTypes";

export default function loadCryptoList(
  setList: React.Dispatch<React.SetStateAction<currencyTypes[]>>
): void {
  const uri =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
  axios
    .get(uri, {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.REACT_APP_COINMARKET_API,
      },
    })
    .then((response) => {
      setList(response.data.data.slice(0, 5));
    })
    .catch((error) => {
      toast.error(error.message);
    });
}
