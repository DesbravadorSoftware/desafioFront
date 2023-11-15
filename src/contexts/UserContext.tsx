// user-context.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

type UserContextType = {
  username: string;
  setUsername: (username: string) => void;
};

const defaultValue: UserContextType = {
  username: "",
  setUsername: () => {},
};

export const UserContext = createContext<UserContextType>(defaultValue);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [username, setUsername] = useState<string>("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook p/ facilitar o acesso ao estado com segurança de tipo
export const useUser = (): UserContextType => useContext(UserContext);
