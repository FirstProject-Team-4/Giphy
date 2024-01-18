import { loadSearch } from "../requests/request-service.js";
import { q } from './helpers.js';
import { CONTAINER_SELECTOR } from "../common/constants.js";
import { toTrendingView } from "../views/trending-view.js";

export const renderSearchItems = async(searchTerm) => {
  const search=await loadSearch(searchTerm);
  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(search);

};
