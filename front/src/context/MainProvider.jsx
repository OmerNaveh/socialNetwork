import React from "react";
import { useState } from "react";
import userContext from "./userContext";
export default function MainProvider({ children }) {
  const [logUser, setLogUser] = useState(false);
  return (
    <userContext.Provider value={{ logUser, setLogUser }}>
      {children}
    </userContext.Provider>
  );
}
