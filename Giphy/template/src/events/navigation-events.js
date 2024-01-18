import { CONTAINER_SELECTOR, HOME, TRENDING,UPLOAD } from '../common/constants.js';
import { toHomeView } from '../views/home-view.js';
import { q, setActiveNav } from './helpers.js';
import { loadTrending, loadGifId, loadFavoriteGifs } from '../requests/request-service.js';
import { toTrendingView } from '../views/trending-view.js';
import { toGifDetailsView } from '../views/gif-details-view.js';
import { FAVORITES } from '../common/constants.js';
import { toFavoritesView } from '../views/favorites-view.js';


// public API
export const loadPage = (page = '') => {

  switch (page) {

    case HOME:
      setActiveNav(HOME);
      return renderHome();

    case UPLOAD:
      setActiveNav(UPLOAD);
      return renderUpload();


    case TRENDING:
      setActiveNav(TRENDING);
      return renderTrending();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    /* if the app supports error logging, use default to log mapping errors */
    default: return null;
  }

};

// export const renderMovieDetails = (id = null) => {
//   // missing implementation
// };

// export const renderCategory = (categoryId = null) => {
//   // missing partial implementation

//   q(CONTAINER_SELECTOR).innerHTML = toMoviesFromCategoryView(category, movies);
// };

// // private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};
const renderUpload = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

const renderTrending = async () => {
  const trendingGifs = await loadTrending(30);
  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trendingGifs);
};
export const renderGifDetails = async (id) => {
  const details = await loadGifId(id);
  q(CONTAINER_SELECTOR).innerHTML = toGifDetailsView(details);
};

const renderFavorites = async () => {
  const favorites = await loadFavoriteGifs();
  console.log(favorites);
  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favorites);
};

// const renderAbout = () => {
//   // missing implementation
// };
