import { createContext } from "react";

export const MyContext = createContext({});

const urlBase = "http://localhost:5000/api";

export const UserProvider = ({ children }) => {
  const validarLogin = async (email, password) => {
    const response = await fetch(`${urlBase}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data);
    return data;
  };

  return <MyContext.Provider value={{validarLogin}}>{children}</MyContext.Provider>;
};
