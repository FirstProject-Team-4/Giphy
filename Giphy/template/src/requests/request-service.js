import { Trending_URL } from '../common/constants.js';
import { getCategories, getMoviesGeneralInfo, getMovieById, getCategory, searchMovies } from '../data/movies.js';


export const loadTrending=async()=>{
    const response =await fetch(Trending_URL())
    const result=await response.json();
    return result.data;
}

// export const loadCategory = (id = null) => {
//   const category = getCategory(id);

//   return category;
// }

// export const loadMovies = (categoryId = null) => {
//   // missing implementation
// };

// export const loadSingleMovie = (id) => {
//   // missing implementation
// };

// export const loadSearchMovies = (searchTerm = '') => {
//   // missing implementation
// };
