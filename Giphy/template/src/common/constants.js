export const HOME = 'home';

export const CATEGORIES = 'categories';

export const FAVORITES = 'favorites';

export const ABOUT = 'about';

export const CONTAINER_SELECTOR = '#container';

export const FULL_HEART = '❤';

export const EMPTY_HEART = '♡';

export const APY_KEY='RAHcDmbbXr75YCd1PKOMAnAMwOeBaGni';
export const Trending_URL=async (limit,offset)=>`https://api.giphy.com/v1/gifs/trending?api_key=${APY_KEY}&limit=${limit}&offset=${offset}&rating=g&bundle=messaging_non_clips`;
