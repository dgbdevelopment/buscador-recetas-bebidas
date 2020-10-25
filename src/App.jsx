import React, { useState, useEffect, useContext } from "react";
import { RecetasContext } from "context/RecetasContext";
import ModalProvider from "context/ModalContext";

import Header from "components/Header";
import Form from "components/Form";
import ListOfDrinks from "components/ListOfDrinks";

function App() {
  const [query, setQuery] = useState({});
  const { drinks, setDrinks } = useContext(RecetasContext);

  useEffect(() => {
    if (Object.keys(query).length === 0) return;
    const doQuery = async () => {
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${
        query.category !== "" ? "c=" + query.category : ""
      }${query.ingredient !== "" ? "i=" + query.ingredient : ""}`;
      const result = await fetch(URL).then((res) => res.json());
      setDrinks(result.drinks);
    };
    doQuery();
  }, [query, setDrinks]);
  return (
    <ModalProvider>
      <Header />
      <div className="container">
        <Form setQuery={setQuery} />
        <ListOfDrinks drinks={drinks} />
      </div>
    </ModalProvider>
  );
}

export default App;
