import { loadCategory } from "../requests/request-service.js";
import { q } from './helpers.js';
import { CONTAINER_SELECTOR } from "../common/constants.js";
import { toCategoryView } from "../views/category-view.js";

export const renderCategory= async(item='dog') => {
  const category=await loadCategory(item);
  q(CONTAINER_SELECTOR).innerHTML = toCategoryView(category);
};
