import { toTrendingItemView } from './trending-view.js';

export const toFavoritesView = (favorites) => `
<div id="movies">
  <h1>Favorite gifs:</h1>
  <div class="content">
    ${favorites.map(toTrendingItemView).join('\n') || '<p>Add some movies to favorites to see them here.</p>'}
  </div>
</div>
`;
