/* eslint-disable linebreak-style */
import { loadSearch } from '../requests/request-service.js';
import { q } from './helpers.js';
import { CONTAINER_SELECTOR } from '../common/constants.js';
import { toSearchView } from '../views/search-view.js';
import { pageMemo } from '../data/pageMemorization.js';

/**
 * Renders the search items based on the provided search term.
 * @param {string} searchTerm - The term to search for.
 * @return {Promise<void>} - A promise that resolves when the search items are rendered.
 */
export const renderSearchItems = async (searchTerm) => {
  const search=await loadSearch(searchTerm);
  q(CONTAINER_SELECTOR).innerHTML = toSearchView(search, searchTerm);
  pageMemo.addLast(q(CONTAINER_SELECTOR).innerHTML);

};
