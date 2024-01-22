import { toTrendingItemView } from './trending-view.js';

export const toFavoritesView = (favorites) => {
  console.log(favorites)
  if (favorites[0].myRandom) {
    return `<h1>⭐Favorite gifs:</h1>
  <h3>Add some gif to favorites to see them here</h3>
  <h3>Here is a random Gif</h3>
  <div class='gif-page'>
  ${favorites.map(toTrendingItemView).join('\n')}
</div>`
  }
  return `
<div id="favorite">
  <h1>⭐Favorite gifs:</h1>
  <div class='gif-page'>
    ${favorites.map(toTrendingItemView).join('\n')}
  </div>
</div>
`
}