import { toTrendingItemView } from './trending-item-view.js';

export const toFavoritesView = (favorites) => `
<div id="movies">
  <h1>Favorite movies:</h1>
  <div class="content">
    ${favorites.data.map(toTrendingItemView).join('\n') || '<p>Add some movies to favorites to see them here.</p>'}
  </div>
</div>
`;
