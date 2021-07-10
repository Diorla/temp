import currencyTypes from "./currencyTypes";
import formatNumber from "./formatNumber";

export default function CryptoRender({
  item,
}: {
  item: currencyTypes;
}): JSX.Element {
  return (
    <tr className="crypto">
      <td>{item.name}</td>
      <td>{item.symbol}</td>
      <td>{formatNumber(Number(item.quote.USD.price))}</td>
    </tr>
  );
}
