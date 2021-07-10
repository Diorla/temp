import renderer from "react-test-renderer";
import NewUser from "../NewUser";

it("renders correctly", () => {
  const tree = renderer.create(<NewUser />).toJSON();
  expect(tree).toMatchSnapshot();
});
