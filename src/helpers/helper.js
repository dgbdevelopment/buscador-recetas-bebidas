export function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const A = a[Object.keys(a)[0]].toUpperCase();
  const B = b[Object.keys(b)[0]].toUpperCase();

  let comparison = 0;
  if (A > B) {
    comparison = 1;
  } else if (A < B) {
    comparison = -1;
  }
  return comparison;
}

export function getIngredients(recipe) {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    if (recipe["strIngredient" + i] && recipe["strIngredient" + i] !== "")
      ingredients.push(
        `${recipe["strIngredient" + i]}: ${recipe["strMeasure" + i]}.`
      );
  }
  return ingredients;
}
