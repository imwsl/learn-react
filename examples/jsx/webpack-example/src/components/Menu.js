import React from "react";
import Recipe from "./Recipe";

function Menu({recipes}) {
    return (
        <article>
            <header>Delicious Recipes</header>
            <div className="recipes">
                {recipes.map((recipe, i) => (
                    <Recipe key={i} {...recipe}/>
                ))}
            </div>
        </article>
    )
}

export default Menu;