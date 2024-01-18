import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { addFavorite, getFavorites, removeFavorite } from '../data/favorites.js';
import { q } from './helpers.js';

export const toggleFavoriteStatus = (id) => {
  const favorites = getFavorites();
  const heartSpan = q(`span[data-gif-id="${id}"]`);
  
  if (favorites.includes(id)) {
    removeFavorite(id);
    heartSpan.classList.remove('active')
    heartSpan.innerHTML = EMPTY_HEART;
  } else {
    addFavorite(id);
    heartSpan.classList.add('active');
    heartSpan.innerHTML = FULL_HEART;
  }
};

export const renderFavoriteStatus = (id) => {
  const favorites = getFavorites();

  return favorites.includes(id)
    ? `<span class="favorite active" data-gif-id="${id}">${FULL_HEART}</span>`
    : `<span class="favorite" data-gif-id="${id}">${EMPTY_HEART}</span>`;
};
