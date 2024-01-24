/* eslint-disable linebreak-style */
import { toTrendingItemView } from './trending-view.js';

/**
 * Converts an array of favorite gifs into a HTML view.
 * @param {Array} favorites - The array of favorite gifs.
 * @return {string} The HTML view of the favorite gifs.
 */
export const toFavoritesView = (favorites) => {
  if (favorites[0].myRandom) {
    return `<h2>⭐Favorite gifs:</h2>
  <h3>Favorites list is empty</h3>
  <h3>Here is a random Gif</h3>
  <div class='gif-page'>
  ${favorites.map(toTrendingItemView).join('\n')}
</div>`;
  }

  return `
<div id="favorite">
  <h2>⭐Favorite gifs:</h2>
  <div class='gif-page'>
    ${favorites.map(toTrendingItemView).join('\n')}
  </div>
</div>
`;
};
