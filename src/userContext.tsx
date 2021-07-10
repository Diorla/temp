import React, { useState, useEffect, createContext, useContext } from "react";
import firebase from "./initApp";

interface UserInfo {
  uid: string;
}
const userInfo: UserInfo = {
  uid: "",
};
export const UserContext = createContext({
  user: { uid: "" },
  loadingUser: true,
});

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [user, setUser] = useState(userInfo);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const unsubscriber = firebase
      .auth()
      .onAuthStateChanged(async (user: any) => {
        if (user) {
          setUser(user);
          setLoadingUser(false);
        } else {
          setUser(userInfo);
          setLoadingUser(false);
        }
      });
    return () => unsubscriber();
  }, [user]);

  return (
    <UserContext.Provider value={{ user, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = (): {
  user: UserInfo;
  loadingUser: boolean;
} =>
  useContext<{
    user: UserInfo;
    loadingUser: boolean;
  }>(UserContext);
