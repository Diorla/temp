import { useEffect, useState } from "react";
import CryptoRender from "./CryptoRender";
import currencyTypes from "./currencyTypes";
import loadAragon from "./loadAragon";
import loadCryptoList from "./loadCryptoList";
import useInterval from "./useInterval";

export default function Market(): JSX.Element {
  const [list, setList] = useState<currencyTypes[]>([]);
  const [aragon, setAragon] = useState<currencyTypes>({
    name: "",
    symbol: "",
    id: "",
    quote: { USD: { price: "" } },
  });

  useEffect(() => {
    loadCryptoList(setList);
    loadAragon(setAragon);
  }, []);

  const delay = 10000;

  useInterval(() => {
    loadCryptoList(setList);
    loadAragon(setAragon);
  }, delay);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <CryptoRender item={aragon} />
        {list.slice(0, 5).map((item: currencyTypes) => (
          <CryptoRender item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
}
