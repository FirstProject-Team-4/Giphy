import { Trending_URL,search_URL,ID_URL,IDs_URL } from '../common/constants.js';
import {getFavorites} from '../data/favorites.js';



export const loadTrending=async()=>{
    const response =await fetch(Trending_URL())
    const result=await response.json();
    return result.data;
}
export const loadSearch=async(searchTerm)=>{
    const response =await fetch(search_URL(searchTerm))
    const result=await response.json();
    return result.data;
}
export const loadGifId=async(id)=>{
    const response =await fetch(ID_URL(id));
    const result=await response.json();
    return result.data;
}
export const loadFavoriteGifs=async()=>{
    const favorites = getFavorites().join(',');
    if (!favorites){
     return [];
    }
    const response =await fetch(IDs_URL(favorites));
    const result=await response.json();
    return result.data;
}


// export const loadMovies = (categoryId = null) => {
//   // missing implementation
// };

// export const loadSingleMovie = (id) => {
//   // missing implementation
// };

// export const loadSearchMovies = (searchTerm = '') => {
//   // missing implementation
// };
