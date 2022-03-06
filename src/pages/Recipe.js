import React from 'react';
import Helmet from 'react-helmet';
import mealdbApi from '../mealdb-api';
import { useLocation, useParams } from 'react-router-dom';

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
                            <div>Ingredients</div>
                            <div>Instructions</div>
                        </div>
                    )
                )}
        </>
    )
}

export default Recipe