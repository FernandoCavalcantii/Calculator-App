import React, { useState } from "react";
import LoginContext from "./LoginContext";

const LoginProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const value = {
    userName,
    setUserName,
  };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
