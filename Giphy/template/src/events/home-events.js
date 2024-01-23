/* eslint-disable linebreak-style */
import { loadCategory } from '../requests/request-service.js';
import { q } from './helpers.js';
import { CONTAINER_SELECTOR } from '../common/constants.js';
import { toCategoryView } from '../views/category-view.js';

/**
 * Renders the category view by loading the category data and updating the container element.
 * @param {string} item - The category item to load.
 * @return {Promise<void>} - A promise that resolves once the category view is rendered.
 */
export const renderCategory = async (item) => {
  const category = await loadCategory(item);
  q(CONTAINER_SELECTOR).innerHTML = toCategoryView(category);
};
