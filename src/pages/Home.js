import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import mealdbApi from '../mealdb-api';

const Home = () => {

    const [recipes, setRecipes] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        mealdbApi.getAll()
            .then(data => {


                if (data === false) {
                    console.error('ERROR:', data);
                } else {
                    console.log('myData:', data);
                    setRecipes(data.results);
                }
                setIsLoading(false);
            });
    }
        , []);


    console.log(recipes);
    return (
        <>
            {isLoading ? <div className='message'>Loading... </div>
                : recipes === null ? <div className='message'>No recipes found</div> : (
                    (
                        <div>
                            <Helmet>
                                <title>Recepies</title>
                            </Helmet>

                            <div className='recipes'>
                                {recipes.map(recipe => (
                                    <Link to={`/recipe/${recipe.id}`} className='recipe' key={recipe.id}>
                                        <span className='bg' style={{ backgroundImage: `url(${recipe.image})` }}></span>
                                        <span className='info'>
                                            <h2>{recipe.title}</h2>
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )
                )}
        </>
    )
}

export default Home