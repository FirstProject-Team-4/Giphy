import { renderFavoriteStatus } from "../events/favorites-events.js";
/**
 * Converts a category object into a category view HTML string.
 * @param {Array} category - The category object to be converted.
 * @returns {string} The HTML string representing the category view.
 */
export const toCategoryView=(category)=>{
    return `
    <section class="category">
    <h2> Gifs:</h2>
  <div class='gif-page'>
  ${category.map(toCategoryItemView).join('')}
  </div>
</section>
  `;
};

/**
 * Converts a search item into a category item view.
 * @param {Object} searchItem - The search item object.
 * @returns {string} The HTML representation of the category item view.
 */
export const toCategoryItemView=(searchItem)=>`
<div class='gif-box'>
    <img src="${searchItem.images.fixed_width.url}" alt="${searchItem.title}" class='idGif' data='${searchItem.id}'>
    <span class="favorite-status"> <data-gif-id="${searchItem.id}">${renderFavoriteStatus(searchItem.id)}</span>
    <span class="fullscreen-button" data-gif-url="${searchItem.images.fixed_width.url}" id='fullscreen'>⛶</span>
</div>
`;

