import React, { useState, useEffect } from "react";
import useSelect from "hooks/useSelect";
import Error from "components/Error";
import { compare } from "helpers/helper";
import PropTypes from "prop-types";

const Form = ({ setQuery }) => {
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(false);

  const [categorySelected, SelectCategory, setCategorySelected] = useSelect(
    "",
    "category",
    "categoría",
    categories
  );

  const [
    ingredientSelected,
    SelectIngredient,
    setIngredientSelected,
  ] = useSelect("", "ingredient", "ingrediente", ingredients);

  useEffect(() => {
    const getResults = async () => {
      const URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const URL2 =
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
      const [categoriesResults, ingredientsResults] = await Promise.all([
        fetch(URL).then((res) => res.json()),
        fetch(URL2).then((res) => res.json()),
      ]);
      setCategories(categoriesResults.drinks.sort(compare));
      setIngredients(ingredientsResults.drinks.sort(compare));
    };
    getResults();
  }, []);

  useEffect(() => {
    if (ingredientSelected !== "") return setCategorySelected("");
  }, [ingredientSelected, setCategorySelected]);

  useEffect(() => {
    if (categorySelected !== "") return setIngredientSelected("");
  }, [categorySelected, setIngredientSelected]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ingredientSelected.trim() === "" && categorySelected.trim() === "") {
      setError("Seleccione ingrediente o categoría");
      return null;
    } else if (
      ingredientSelected.trim() !== "" &&
      categorySelected.trim() !== ""
    ) {
      setError("Buscar por ingrediente o por categoría. No los dos a la vez");
      return null;
    }

    setError(false);
    setQuery({ ingredient: ingredientSelected, category: categorySelected });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="col-12 mt-5">
        <fieldset className="text-center">
          <legend className="legend-title">
            Buscar Bebidas por Categoría o por Ingredientes
          </legend>
        </fieldset>
        <div className="row">
          <div className="col-md-4 mt-4">
            <SelectIngredient />
          </div>
          <div className="col-md-4 mt-4">
            <SelectCategory />
          </div>
          <div className="col-md-4 mt-4">
            <button type="submit" className="btn btn-info btn-block">
              Buscar Bebida
            </button>
          </div>
        </div>
      </form>
      {error ? <Error message={error} /> : null}
    </>
  );
};

Form.propTypes = {
  setQuery: PropTypes.func.isRequired,
};

export default Form;
