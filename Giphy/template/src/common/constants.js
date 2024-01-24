/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
export const HOME = 'home';

export const UPLOAD = 'upload';

export const TRENDING = 'trending';

export const FAVORITES = 'favorites';

export const ABOUT = 'about';

export const CONTAINER_SELECTOR = '#container';

export const FULL_STAR = '⭐';

export const EMPTY_STAR = '☆';

export const APY_KEY = 'RAHcDmbbXr75YCd1PKOMAnAMwOeBaGni';
export const defaultLimit = 48;
const defaultOffset = 0;
/**
 * Returns the URL for trending GIFs.
 *
 * @param {number} limit - The number of GIFs to retrieve.
 * @param {number} offset - The offset for pagination.
 * @return {string} The URL for trending GIFs.
 */
export const Trending_URL = (limit = defaultLimit, offset = defaultOffset) => `https://api.giphy.com/v1/gifs/trending?api_key=
${APY_KEY}&limit=${limit}&offset=${offset}&rating=g&bundle=messaging_non_clips`;

/**
 * Generates the URL for retrieving GIFs by their IDs.
 *
 * @param {string} IDs - The IDs of the GIFs to retrieve.
 * @return {string} The generated URL.
 */
export const IDs_URL = (IDs) => `https://api.giphy.com/v1/gifs?api_key=${APY_KEY}&ids=${IDs}&rating=g`;

/**
 * Generates the URL for retrieving a GIF by its ID.
 *
 * @param {string} id - The ID of the GIF.
 * @return {string} The URL for retrieving the GIF.
 */
export const ID_URL = (id) => `https://api.giphy.com/v1/gifs/${id}?api_key=${APY_KEY}&rating=g`;

/**
 * Generates the search URL for Giphy API based on the provided search term, limit, and offset.
 *
 * @param {string} searchTerm - The term to search for.
 * @param {number} [limit=defaultLimit] - The maximum number of results to return. Defaults to the value of defaultLimit.
 * @param {number} [offset=defaultOffset] - The offset of the results. Defaults to the value of defaultOffset.
 * @return {string} The generated search URL.
 */
export const search_URL = (searchTerm, limit = defaultLimit, offset = defaultOffset) => `https://api.giphy.com/v1/gifs/search?api_key=
${APY_KEY}&q=${searchTerm}&limit=${limit}&offset=${offset}&rating=g&lang=en&bundle=messaging_non_clips`;

export const POST_URL = `https://upload.giphy.com/v1/gifs?api_key=${APY_KEY}`;

/**
 * Returns the URL for fetching a random GIF from the Giphy API.
 *
 * @return {string} The URL for fetching a random GIF.
 */
export const RANDOM_URL = () => `https://api.giphy.com/v1/gifs/random?api_key=${APY_KEY}&tag=&rating=g`;
