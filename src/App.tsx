import "./App.css";
import { useUser } from "./userContext";
import User from "./User";
import Login from "./Login";
import NewUser from "./NewUser";
import { useCryptoState } from "./cryptoContext";
import Spinner from "./Spinner";

function App(): JSX.Element {
  const { user, loadingUser } = useUser();
  const cryptoState = useCryptoState();
  if (loadingUser) return <Spinner />;
  if (user.uid) {
    if (cryptoState.provider) return <User />;
    return <NewUser />;
  }
  return <Login />;
}

export default App;
