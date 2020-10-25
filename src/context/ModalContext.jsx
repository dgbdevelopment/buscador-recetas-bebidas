import React, { createContext, useState, useEffect } from "react";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [id, setId] = useState(null);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (!id) return;
    const getRecipe = async () => {
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

      const result = await fetch(URL).then((res) => res.json());
      setRecipe(result.drinks[0]);
    };
    getRecipe();
  }, [id]);

  return (
    <ModalContext.Provider value={{ setId, recipe, setRecipe }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
