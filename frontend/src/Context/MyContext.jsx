import { createContext, useEffect, useState } from "react";

export const MyContext = createContext({});

const urlBase = "http://localhost:5000/api";

export const UserProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [token, setToken] = useState(localStorage.getItem("token"));
    useEffect(() => {
        if (token) {
          localStorage.setItem("token", token);
        } else {
          localStorage.removeItem("token");
        }
      }, [token]);
  const validarLogin = async (email, password) => {
    const response = await fetch(`${urlBase}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    setEmail(email);
    setToken(data.token);
    return data;
  };

  return <MyContext.Provider value={{validarLogin}}>{children}</MyContext.Provider>;
};
