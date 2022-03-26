import React from 'react'

const RecipeInstructions = ({ instructions }) => {


    return (
        <div className='instructions'>
            <h2>Instructions</h2>
            <div className='steps'>
                { instructions !== undefined ? (
                    instructions.steps.map((step, index) => (
                        <div className='step' key={index}>
                            <div className='number'>{index + 1}</div>
                            <div className='text'>{step.step}</div>
                        </div>
                    ))
                ) : (
                    <p>No instructions available</p>
                ) }
            </div>
        </div>
    )
}

export default RecipeInstructions;