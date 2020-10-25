import React from "react";
import Drink from "components/Drink";
import PropTypes from "prop-types";

const ListOfDrinks = ({ drinks }) => {
  if (drinks.length === 0) return null;

  return (
    <div className="row mt-5">
      {drinks.map((drink) => (
        <Drink key={drink.idDrink} drink={drink} />
      ))}
    </div>
  );
};

ListOfDrinks.propTypes = { drinks: PropTypes.arrayOf(Object).isRequired };

export default ListOfDrinks;
