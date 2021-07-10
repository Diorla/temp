import renderer from "react-test-renderer";
import CryptoRender from "../CryptoRender";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <CryptoRender
        item={{
          name: "AbcCoin",
          id: "123",
          symbol: "ABC",
          quote: {
            USD: {
              price: "100000000000000",
            },
          },
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
