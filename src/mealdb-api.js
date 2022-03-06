import 'isomorphic-fetch';

const baseUrl = 'https://api.spoonacular.com/recipes/';
const API_KEY = '8c768f590f2644e2bc24e6352b6588b6';

const getAll = async () => {
    try {
        console.log('featch to: ', `${baseUrl}complexSearch?apiKey=${API_KEY}`);
        const request = await fetch(`${baseUrl}complexSearch?apiKey=${API_KEY}`);
        const data = await request.json();
        return data;
    } catch (e) {
        return false;
    }
}

const getRecipe = async (id) => {
    try {
        console.log('featch to: ', `${baseUrl}${id}/information?apiKey=${API_KEY}`);
        const request = await fetch(`${baseUrl}${id}/information?apiKey=${API_KEY}`);
        const data = await request.json();
        return data;
    } catch (e) {
        return false;
    }
}

export default {
    getAll,
    getRecipe
}