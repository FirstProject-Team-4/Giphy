import { loadSearch } from "../requests/request-service.js";
import { q } from './helpers.js';
import { CONTAINER_SELECTOR } from "../common/constants.js";
import { toSearchView } from "../views/search-view.js";
import { pageMemo } from "../data/pageMemorization.js";

export const renderSearchItems = async(searchTerm) => {
  const search=await loadSearch(searchTerm);
  q(CONTAINER_SELECTOR).innerHTML = toSearchView(search);
  pageMemo.addLast(q(CONTAINER_SELECTOR).innerHTML);    //WHY DA FAK isn't it working in index.js
      console.log(pageMemo)

};
