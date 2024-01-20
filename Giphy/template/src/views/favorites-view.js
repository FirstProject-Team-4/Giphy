import { toTrendingItemView } from './trending-view.js';

export const toFavoritesView = (favorites) => `
<div id="favorite">
  <h1>Favorite gifs:</h1>
  <div class="content">
    ${favorites.map(toTrendingItemView).join('\n') || '<p>Add some gifs to favorites to see them here.</p>'}
  </div>
</div>
`;
