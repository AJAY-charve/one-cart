import React, { createContext } from "react";

export const authDataContext = createContext();

const AuthContext = ({ children }) => {
  let serverUrl = "https://one-cart-c8f6.onrender.com";
  // let serverUrl = "http://localhost:8000";

  let value = {
    serverUrl,
  };

  return (
    <div>
      <authDataContext.Provider value={value}>
        {children}
      </authDataContext.Provider>
    </div>
  );
};

export default AuthContext;
