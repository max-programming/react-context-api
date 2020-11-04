import { createContext, useState } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [people, setPeople] = useState([
    {
      name: "Max",
      age: 20,
      aboveTwenty: false,
    },
    {
      name: "Florin",
      age: 25,
      aboveTwenty: true,
    },
    {
      name: "James",
      age: 26,
      aboveTwenty: true,
    },
  ]);
  return (
    <MainContext.Provider value={{ people, setPeople }}>
      {children}
    </MainContext.Provider>
  );
};
