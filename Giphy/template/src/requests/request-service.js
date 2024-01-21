import { Trending_URL,search_URL,ID_URL,IDs_URL } from '../common/constants.js';
import {getFavorites} from '../data/favorites.js';

export const loadMyUpload=async(myUploads)=>{

    if (myUploads.length===0){
        return 'No Uploads';
    }
    const arrayID = myUploads.map(element=>element.id.data.id).join(',')
    const userNames = myUploads.map(element=>element.user)
    const gifTitles = myUploads.map(element=>element.gifTitle)

    const response = await fetch(IDs_URL(arrayID));
    const result = await response.json();
    result.data.forEach((element,index) => {
        element.user=userNames[index];
        element.gifTitle=gifTitles[index];
    });

  return  result.data;

}
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

// search category dog
export const loadCategory=async(item)=>{
    const response =await fetch(search_URL(item))
    const result=await response.json();
    return result.data;
}

