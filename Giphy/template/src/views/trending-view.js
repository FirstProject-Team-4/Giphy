/* eslint-disable linebreak-style */
import { renderFavoriteStatus } from '../events/favorites-events.js';
import { defaultLimit } from '../common/constants.js';
/**
 * Converts an array of trending gifs into a HTML string representing the trending view.
 * @param {Array} trendingGifs - The array of trending gifs.
 * @return {string} - The HTML string representing the trending view.
 */
export const toTrendingView=(trendingGifs)=>{
  return `
    <section class="trending">
    <h2>🔥 Trending</h2>
    <div id='trending-gifs-id' class='gif-page'>
      ${trendingGifs.map(toTrendingItemView).join('')}
    </div>
    ${moreTrendingButton(trendingGifs.length)}
  </section>
  `;
};
/**
 * Generates a button to view more trending items.
 * @param {number} count - The current count of trending items.
 * @return {string} - The HTML string representing the button.
 */
const moreTrendingButton = (count) => {
  if (count&&count % defaultLimit === 0) {
    return `<button class="more-trending-button">View more</button>`;
  }
  return '';
};

/**
 * Converts a trending item object into a HTML view.
 * @param {Object} trendingItem - The trending item object.
 * @return {string} - The HTML view of the trending item.
 */
export const toTrendingItemView=(trendingItem)=>`
<div class='gif-box'>
    <img src="${trendingItem.images.fixed_width.url}" alt="${trendingItem.title}" class='idGif' data='${trendingItem.id}'>
    <span class="favorite-status"> <data-gif-id="${trendingItem.id}">${renderFavoriteStatus(trendingItem.id)}</span>
    <span class="fullscreen-button" data-gif-url="${trendingItem.images.fixed_width.url}" id='fullscreen'>⛶</span>
</div>
`;

