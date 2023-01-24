import React, { createContext } from "react";

const CountContext = createContext({
  count: 0,
  setCount: (newCount: number) => {}
});

export default CountContext;