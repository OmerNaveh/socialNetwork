import React from "react";
import { useReducer } from "react";
import feedContext from "./feedContext";
import feedReducer from "./feedReducer";

export default function FeedProvider({ children }) {
  const [state, dispatch] = useReducer(feedReducer, []);
  return (
    <feedContext.Provider value={{ state, dispatch }}>
      {children}
    </feedContext.Provider>
  );
}
