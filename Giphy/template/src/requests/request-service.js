/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable camelcase */

import { Trending_URL, search_URL, ID_URL, IDs_URL } from '../common/constants.js';
import { getFavorites } from '../data/favorites.js';
import { RANDOM_URL, defaultLimit } from '../common/constants.js';
import { getMyUploads } from '../data/my-uploads.js';
import { pageMemo } from '../data/pageMemorization.js';


/**
 * Loads the user's uploads.
 * @param {Array} myUploads - The array of user's uploads.
 * @return {Promise<Array>} - A promise that resolves to an array of user's uploads.
 */
export const loadMyUpload = async (myUploads) => {

  if (myUploads.length === 0) {
    return 'No Uploads';
  }
  const arrayID = myUploads.map(element => element.id.data.id).join(',');
  const userNames = myUploads.map(element => element.user);
  const gifTitles = myUploads.map(element => element.gifTitle);

  const response = await fetch(IDs_URL(arrayID));
  const result = await response.json();
  result.data.forEach((element, index) => {
    element.user = userNames[index];
    element.gifTitle = gifTitles[index];
  });

  return result.data;

};
/**
 * Loads the trending data from the API.
 * @return {Promise<Array>} A promise that resolves to an array of trending data.
 */
export const loadTrending = async () => {
  const response = await fetch(Trending_URL());
  const result = await response.json();
  return result.data;
};
/**
 * Loads more trending data.
 * @return {Promise<Array>} The trending data.
 */
export const loadMoreTrending = async () => {
  pageMemo.tail.offset += defaultLimit;
  const response = await fetch(Trending_URL(defaultLimit, pageMemo.tail.offset));
  const result = await response.json();
  console.log(pageMemo.tail.offset);
  return result.data;
};
/**
 * Loads more items from a specific category.
 * @param {string} searchTerm - The search term for the category.
 * @return {Promise<Array>} - A promise that resolves to an array of items from the category.
 */
export const loadMoreCategory = async (searchTerm) => {
  pageMemo.tail.offset += defaultLimit;
  const response = await fetch(search_URL(searchTerm, defaultLimit, pageMemo.tail.offset));
  const result = await response.json();
  return result.data;
};
/**
 * Loads more search results based on the given search term.
 * @param {string} searchTerm - The search term to load more results for.
 * @return {Promise<Array>} - A promise that resolves to an array of search results.
 */
export const loadMoreSearch = async (searchTerm) => {
  pageMemo.tail.offset += defaultLimit;
  const response = await fetch(search_URL(searchTerm, defaultLimit, pageMemo.tail.offset));
  const result = await response.json();
  return result.data;
};

/**
 * Loads search results from the Giphy API based on the provided search term.
 * @param {string} searchTerm - The term to search for.
 * @return {Promise<Array>} - A promise that resolves to an array of search results.
 */
export const loadSearch = async (searchTerm) => {
  const response = await fetch(search_URL(searchTerm));
  const result = await response.json();
  return result.data;
};

/**
 * Loads the GIF data for a given ID.
 * @param {string} id - The ID of the GIF.
 * @return {Promise<Object>} - A promise that resolves to the GIF data.
 */
export const loadGifId = async (id) => {
  const response = await fetch(ID_URL(id));
  const result = await response.json();
  return result.data;
};

/**
 * Retrieves a single object from the result array based on the provided ID.
 * @param {string} id - The ID of the object to retrieve.
 * @return {object} - The object with the matching ID.
 */
export const loadUploadGifId = (id) => {
  const result = getMyUploads();
  const singleObj = result.filter(e => e.id === id);
  return singleObj[0];
};

/**
 * Loads favorite GIFs.
 * @return {Promise<Array<Object>>} A promise that resolves to an array of favorite GIFs.
 */
export const loadFavoriteGifs = async () => {
  const favorites = getFavorites().join(',');

  if (!favorites) {

    const response = await fetch(RANDOM_URL());
    const result = await response.json();
    result.data.myRandom = true;

    return [result.data];
  }
  const response = await fetch(IDs_URL(favorites));
  const result = await response.json();
  return result.data;
};


/**
 * Loads the category data from the server.
 * @param {string} item - The category item to search for.
 * @return {Promise<Array>} - A promise that resolves to an array of category data.
 */
export const loadCategory = async (item) => {
  const response = await fetch(search_URL(item));
  const result = await response.json();
  return result.data;
};

