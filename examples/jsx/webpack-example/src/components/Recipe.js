import React from "react"

import Instructions from "./Instructions";
import IngredientsList from "./Ingredients";

function Recipe({name, ingredients, steps}) {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <IngredientsList ingredients={ingredients} />
            <Instructions title="Cooking Instructions" steps={steps} />
        </section>
    )
}

export default Recipe;