import React from 'react'

const RecipeInstructions = ({ instructions }) => {

    const { steps } = instructions;


    return (
        <div className='instructions'>
            <h2>Instructions</h2>
            <div className='steps'>
                {steps.map((step, index) => (
                    <div className='step' key={index}>
                        <div className='number'>{index + 1}</div>
                        <div className='text'>{step.step}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipeInstructions