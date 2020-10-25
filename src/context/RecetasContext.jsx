import React, { useState, createContext } from "react";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [drinks, setDrinks] = useState([]);

  return (
    <RecetasContext.Provider value={{ drinks, setDrinks }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
