/* eslint-disable linebreak-style */
import { renderFavoriteStatus } from '../events/favorites-events.js';
import { defaultLimit } from '../common/constants.js';

/**
 * Converts the search results into a search view HTML string.
 * @param {Array} searchGifs - The array of search results.
 * @param {string} searchTerm - The search term used to retrieve the results.
 * @return {string} - The HTML string representing the search view.
 */
export const toSearchView = (searchGifs, searchTerm) => {
  return `
    <section class="trending">
    <h2>${searchTerm}</h2>
    <div id='search-gif-page' class='gif-page'>
      ${checkLength(searchGifs, searchTerm)}
    </div>
    ${moreSearchedGifsButton(searchGifs.length, searchTerm)}
  </section>
  `;
};
/**
 * Generates a button to view more searched gifs.
 *
 * @param {number} count - The number of gifs searched.
 * @param {string} currentSearchTerm - The current search term.
 * @return {string} - The HTML string representing the button.
 */
const moreSearchedGifsButton = (count, currentSearchTerm) => {
  if (count&&count % defaultLimit === 0) {
    return `<button class="more-search-gifs-button"  type=${currentSearchTerm}>View more</button>`;
  }
  return '';
};
const checkLength = (element, searchTerm) => {
  if (element.length > 0) {
    return element.map((e) => toSearchItemView(e)).join('');
  }
  return `<p>No results found for: ${searchTerm}.</p>`;
};

/**
 * Converts a search item into a view for displaying in the search view.
 * @param {Object} searchItem - The search item object.
 * @return {string} - The HTML representation of the search item view.
 */
export const toSearchItemView = (searchItem) => `
<div class='gif-box'>
    <img src="${searchItem.images.fixed_width.url}" alt="${searchItem.title}" class='idGif' data='${searchItem.id}'>
    <span class="favorite-status"> <data-gif-id="${searchItem.id}">${renderFavoriteStatus(searchItem.id)}</span>
    <span class="fullscreen-button" data-gif-url="${searchItem.images.fixed_width.url}" id='fullscreen'>⛶</span>
</div>
`;
