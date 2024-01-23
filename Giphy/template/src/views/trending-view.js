/* eslint-disable linebreak-style */
import { renderFavoriteStatus } from '../events/favorites-events.js';
/**
 * Converts an array of trending gifs into a HTML string representing the trending view.
 * @param {Array} trendingGifs - The array of trending gifs.
 * @return {string} - The HTML string representing the trending view.
 */
export const toTrendingView=(trendingGifs)=>{
  return `
    <section class="trending">
    <h2>🔥 Trending</h2>
    <div class='gif-page'>
      ${trendingGifs.map(toTrendingItemView).join('')}
    </div>
  </section>
  `;
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

