import React from 'react';
import Helmet from 'react-helmet';
import mealdbApi from '../mealdb-api';
import { useParams } from 'react-router-dom';
import RecipeIngredients from '../components/RecipeIngredients';
import RecipeInstructions from '../components/RecipeInstructions';

const Recipe = () => {

    let { recipeId } = useParams();


    const [recipe, setRecipe] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        mealdbApi.getRecipe(recipeId)
            .then(data => {

                if (data === false) {
                    console.error('ERROR:', data);
                } else {
                    console.log('myData:', data);
                    setRecipe(data);
                }
                setIsLoading(false);
            });
    }
        , []);

    return (
        <>
            {isLoading ? <div className='message'>Loading...</div>
                : recipe === null ? <div className='message'>No recipe found</div> : (
                    (
                        <div className='Recipe'>
                            <Helmet>
                                <title>{recipe.title}</title>
                            </Helmet>

                            <div className='hero' style={{ backgroundImage: `url(${recipe.image})` }} />
                            <div className='title'>
                                <div className='info'>
                                    <h1>{recipe.title}</h1>
                                    <p>{recipe.title}</p>
                                </div>
                            </div>
                            <RecipeIngredients ingredients={recipe.extendedIngredients} />
                            <RecipeInstructions instructions={recipe.analyzedInstructions[0]} />
                        </div>
                    )
                )}
        </>
    )
}

export default Recipe