import renderer from "react-test-renderer";
import Market from "../Market";

it("renders correctly", () => {
  const tree = renderer.create(<Market />).toJSON();
  expect(tree).toMatchSnapshot();
});
