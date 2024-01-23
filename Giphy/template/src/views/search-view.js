import { renderFavoriteStatus } from "../events/favorites-events.js";
/**
 * Converts an array of search gifs into a search view HTML string.
 *
 * @param {Array} searchGifs - The array of search gifs.
 * @returns {string} The search view HTML string.
 */
export const toSearchView = (searchGifs) => {
  return `
    <section class="trending">
    <h2>Search Gifs:</h2>
    <div class='gif-page'>
      ${searchGifs.map(toSearchItemView).join('')}
    </div>
  </section>
  `;
};

/**
 * Converts a search item into a view for displaying in the search view.
 * @param {Object} searchItem - The search item object.
 * @returns {string} - The HTML representation of the search item view.
 */
export const toSearchItemView = (searchItem) => `
<div class='gif-box'>
    <img src="${searchItem.images.fixed_width.url}" alt="${searchItem.title}" class='idGif' data='${searchItem.id}'>
    <span class="favorite-status"> <data-gif-id="${searchItem.id}">${renderFavoriteStatus(searchItem.id)}</span>
    <span class="fullscreen-button" data-gif-url="${searchItem.images.fixed_width.url}" id='fullscreen'>⛶</span>
</div>
`;
