import React, { useContext, useState } from "react";
import { ModalContext } from "context/ModalContext";
import Modal from "@material-ui/core/Modal";
import PropTypes from "prop-types";

import { getModalStyle, useStyles } from "helpers/receta";
import { getIngredients } from "helpers/helper";

const Drink = ({ drink }) => {
  const { setId, setRecipe, recipe } = useContext(ModalContext);

  const [modalStyle] = useState(getModalStyle);
  const [opened, setOpened] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpened(true);
  };
  const handleClose = () => {
    setId(null);
    setRecipe(null);
    setOpened(false);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <img
            className="card-img"
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
          />
          <h3 className="card-title mt-2">{drink.strDrink}</h3>
          <button
            className="btn btn-block btn-primary text-center"
            onClick={() => {
              setId(drink.idDrink);
              handleOpen();
            }}
          >
            Ver receta
          </button>
          <Modal open={opened} onClose={handleClose}>
            <div style={modalStyle} className={classes.paper}>
              {recipe ? (
                <>
                  <h2 className="text-dark">{recipe.strDrink}</h2>
                  <h3 className="mt-4">Instrucciones:</h3>
                  <p style={{ whiteSpace: "pre-wrap" }}>
                    {recipe.strInstructions}
                  </p>
                  <h4 className="mt-4">Ingredientes:</h4>
                  <ul>
                    {getIngredients(recipe).map((ingredient) => (
                      <li key={ingredient}>{ingredient}</li>
                    ))}
                  </ul>
                  <img
                    src={recipe.strDrinkThumb}
                    alt={`imagen de ${recipe.strDrink}`}
                    className="img-fluid my-4"
                  />
                </>
              ) : null}
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

Drink.propTypes = {
  drink: PropTypes.object.isRequired,
};

export default Drink;
