"use client";

import { createContext, useContext, useState } from "react";

type User = {
  username: string;
};

type UserContext = {
  user: User;
  setUser: (user: User) => void;
};

const UserContext = createContext<UserContext | undefined>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({ username: "matan" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

export default UserProvider;
