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

    const share = (e) =>{
        e.preventDefault();
        if(!navigator.share) {
            alert('Your browser does not support the share API'); 
            return;
        }

        const {title} = recipe;
        navigator.share({
            title,
            text: 'Check out this recipe',
            url: window.location.href
        }).then(() => console.log('Successful share')).catch((error) => console.log('Error sharing', error));
    }

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


    console.log(recipe);
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
                                <div>
                                    <a onClick={share}>Share</a>
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