import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export function StoreContextProvider({ children }) {
  const [token, setToken]     = useState(localStorage.getItem("token") || "");
  const [admin, setAdmin]     = useState(!!localStorage.getItem("admin"));

  return (
    <StoreContext.Provider value={{ token, admin, setToken, setAdmin }}>
      {children}
    </StoreContext.Provider>
  );
}

// this default export lets your main.jsx import it directly
export default StoreContextProvider;
