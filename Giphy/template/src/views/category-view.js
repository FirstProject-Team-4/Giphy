/* eslint-disable linebreak-style */
import { renderFavoriteStatus } from '../events/favorites-events.js';
import { defaultLimit } from '../common/constants.js';


/**
 * Generates the HTML markup for the category view.
 * @param {Array} category - The array of category items.
 * @param {string} currentSearchTerm - The current search term.
 * @return {string} The HTML markup for the category view.
 */
export const toCategoryView=(category, currentSearchTerm)=>{
  return `
    <section class="category">
    <h2>${currentSearchTerm}</h2>
  <div id='category-gif-box' class='gif-page'>
  ${category.map(toCategoryItemView).join('')}
  </div>
  ${moreCategoryGifsButton(category.length, currentSearchTerm)}
</section>
  `;
};
const moreCategoryGifsButton = (count, currentSearchTerm) => {
  if (count&&count % defaultLimit === 0) {
    return `<button class="more-category-gifs-button" type=${currentSearchTerm}>View more</button>`;
  }
  return '';
};
/**
 * Converts a search item into a category item view.
 * @param {Object} searchItem - The search item object.
 * @return {string} The HTML representation of the category item view.
 */
export const toCategoryItemView=(searchItem)=>`
<div class='gif-box'>
    <img src="${searchItem.images.fixed_width.url}" alt="${searchItem.title}" class='idGif' data='${searchItem.id}'>
    <span class="favorite-status"> <data-gif-id="${searchItem.id}">${renderFavoriteStatus(searchItem.id)}</span>
    <span class="fullscreen-button" data-gif-url="${searchItem.images.fixed_width.url}" id='fullscreen'>⛶</span>
</div>
`;

