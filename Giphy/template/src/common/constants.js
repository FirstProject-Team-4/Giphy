export const HOME = 'home';

export const TRENDING = 'trending';

export const FAVORITES = 'favorites';

export const ABOUT = 'about';

export const CONTAINER_SELECTOR = '#container';

export const FULL_HEART = '❤';

export const EMPTY_HEART = '♡';

export const APY_KEY='RAHcDmbbXr75YCd1PKOMAnAMwOeBaGni';
const defaultLimit = 25;
const defaultOffset = 0;
/**
 * Returns the URL for trending GIFs.
 *
 * @param {number} limit - The number of GIFs to retrieve.
 * @param {number} offset - The offset for pagination.
 * @returns {string} The URL for trending GIFs.
 */
export const Trending_URL=(limit=defaultLimit,offset=defaultOffset)=>`https://api.giphy.com/v1/gifs/trending?api_key=
${APY_KEY}&limit=${limit}&offset=${offset}&rating=g&bundle=messaging_non_clips`;

/**
 * Generates the URL for retrieving GIFs by their IDs.
 *
 * @param {string} IDs - The IDs of the GIFs to retrieve.
 * @returns {string} The generated URL.
 */
export const IDs_URL=(IDs)=>`https://api.giphy.com/v1/gifs?api_key=${APY_KEY}&ids=${IDs}&rating=g`;

/**
 * Generates the URL for retrieving a GIF by its ID.
 *
 * @param {string} id - The ID of the GIF.
 * @returns {string} The URL for retrieving the GIF.
 */
export const ID_URL=(id)=>`https://api.giphy.com/v1/gifs/${id}?api_key=${APY_KEY}&rating=g`;

/**
 * Generates the search URL for Giphy API based on the provided search term, limit, and offset.
 *
 * @param {string} searchTerm - The term to search for.
 * @param {number} [limit=defaultLimit] - The maximum number of results to return. Defaults to the value of defaultLimit.
 * @param {number} [offset=defaultOffset] - The offset of the results. Defaults to the value of defaultOffset.
 * @returns {string} The generated search URL.
 */
export const search_URL=(searchTerm,limit=defaultLimit,offset=defaultOffset)=>`https://api.giphy.com/v1/gifs/search?api_key=
${APY_KEY}&q=${searchTerm}&limit=${limit}&offset=${offset}&rating=g&lang=en&bundle=messaging_non_clips`