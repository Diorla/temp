import axios from "axios";
import currencyTypes from "./currencyTypes";

export default function loadAragon(
  setAragon: React.Dispatch<React.SetStateAction<currencyTypes>>
): void {
  const info =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest";
  axios
    .get(info, {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.REACT_APP_COINMARKET_API,
      },
      params: {
        symbol: "ANT",
        convert: "USD",
      },
    })
    .then((response) => {
      const { name, symbol, id, quote } = response.data.data["ANT"];
      setAragon({
        name,
        symbol,
        id,
        quote,
      });
    })
    .catch((error) => {
      console.error(error.message);
    });
}
