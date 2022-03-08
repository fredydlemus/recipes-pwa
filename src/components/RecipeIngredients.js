import React from 'react'

const RecipeIngredients = ({ ingredients }) => {

    console.log(ingredients)

    return (
        <div className='ingredients'>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.original}</li>
                ))}
            </ul>
        </div>
    )
}

export default RecipeIngredients