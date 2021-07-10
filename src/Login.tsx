import { toast } from "react-toastify";
import firebase from "./initApp";

const loginWithGoogle = (): void => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");
  firebase
    .auth()
    .signInWithPopup(provider)
    .catch((err) => toast.error(err.message));
};

export default function Login(): JSX.Element {
  return (
    <div className="center-wrapper">
      <button onClick={loginWithGoogle} className="login">
        Login with Google
      </button>
    </div>
  );
}
