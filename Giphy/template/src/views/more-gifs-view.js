/* eslint-disable linebreak-style */
import { defaultLimit } from '../common/constants.js';
import { q } from '../events/helpers.js';
import { toTrendingItemView } from './trending-view.js';


/**
 * Adds more trending GIFs to the view.
 *
 * @param {Array} trendingGifs - An array of trending GIFs.
 */
export const addMoreTrending = (trendingGifs) => {
  const moreTrending = trendingGifs.map(toTrendingItemView).join('');
  q('#trending-gifs-id').innerHTML += `<div class='gif-page>${moreTrending}</div>`;
  if (trendingGifs.length&&trendingGifs.length % defaultLimit === 0) {
    q('#trending-gifs-id').innerHTML +=`<button class="more-trending-button">View more</button>`;
  }
};

/**
 * Adds more category gifs to the category gif box.
 *
 * @param {Array} categoryGifs - The array of category gifs.
 * @param {string} searchTerm - The search term used to retrieve the category gifs.
 * @return {void}
 */
export const addMoreCategory = (categoryGifs, searchTerm) => {
  const moreCategoryGifs = categoryGifs.map(toTrendingItemView).join('');
  q('#category-gif-box').innerHTML += `<div class='gif-page>${moreCategoryGifs}</div>`;
  if (categoryGifs.length&&categoryGifs.length % defaultLimit === 0) {
    q('#category-gif-box').innerHTML +=`<button class="more-category-gifs-button" type=${searchTerm}>View more</button>`;
  }
};
/**
 * Adds more search gifs to the search gif page.
 *
 * @param {Array} searchGifs - The array of search gifs.
 * @param {string} searchTerm - The search term used to retrieve the gifs.
 * @return {void}
 */
export const addMoreSearch = (searchGifs, searchTerm) => {
  const moreSearchGifs = searchGifs.map(toTrendingItemView).join('');
  q('#search-gif-page').innerHTML += `<div class='gif-page>${moreSearchGifs}</div>`;
  if (searchGifs.length&&searchGifs.length % defaultLimit === 0) {
    q('#search-gif-page').innerHTML +=`<button class="more-search-gifs-button" type=${searchTerm}>View more</button>`;
  }
};
