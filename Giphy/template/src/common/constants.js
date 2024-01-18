export const HOME = 'home';

export const CATEGORIES = 'categories';

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
export const Trending_URL=(limit=defaultLimit,offset=defaultOffset)=>`https://api.giphy.com/v1/gifs/trending?api_key=$
{APY_KEY}&limit=${limit}&offset=${offset}&rating=g&bundle=messaging_non_clips`;
