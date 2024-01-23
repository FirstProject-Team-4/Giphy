import { toTrendingItemView } from './trending-view.js';


/**
 * Converts an array of favorite gifs into a HTML view.
 * @param {Array} favorites - The array of favorite gifs.
 * @returns {string} The HTML view of the favorite gifs.
 */
export const toFavoritesView = (favorites) => {
  console.log(favorites)
  if (favorites[0].myRandom) {
    return `<h2>⭐Favorite gifs:</h2>
  <h3>Add some gif to favorites to see them here</h3>
  <h3>Here is a random Gif</h3>
  <div class='gif-page'>
  ${favorites.map(toTrendingItemView).join('\n')}
</div>`
  }

  return `
<div id="favorite">
  <h2>⭐Favorite gifs:</h2>
  <div class='gif-page'>
    ${favorites.map(toTrendingItemView).join('\n')}
  </div>
</div>
`
}