import React from "react";

function Ingredient({name, i}) {
    return (
        <li key={i}>{name}</li>
    )
}

function IngredientsList({ingredients}) {
    return (
        <ul className="ingredients">
            {ingredients.map((ingredient, i) => (
                <Ingredient key={i} name={ingredient.name} i={i}/>
            ))}
        </ul>
    )
}

export default IngredientsList;