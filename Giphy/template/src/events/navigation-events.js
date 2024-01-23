import { CONTAINER_SELECTOR, HOME, TRENDING, UPLOAD,ABOUT } from '../common/constants.js';
import { toHomeView } from '../views/home-view.js';
import { q, setActiveNav } from './helpers.js';
import { loadTrending, loadGifId, loadFavoriteGifs,loadMyUpload } from '../requests/request-service.js';
import { toTrendingView } from '../views/trending-view.js';
import { toGifDetailsView } from '../views/gif-details-view.js';
import { FAVORITES } from '../common/constants.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toUploadView } from '../views/upload-view.js';
import { toAboutView } from '../views/about-view.js';
import { getMyUploads } from '../data/my-uploads.js';
import { pageMemo } from '../data/pageMemorization.js';
import { loadUploadGifId } from '../requests/request-service.js';
import { myGifDetailsView } from '../views/upload-single-details-view.js';

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

    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();


    /* if the app supports error logging, use default to log mapping errors */
    default: return null;
  }

};


const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
  pageMemo.addLast(q(CONTAINER_SELECTOR).innerHTML);
};
export const renderUpload =async (uploadValue) => {
 const listOfUploads=getMyUploads()
 //const uploadGifs=await loadMyUpload(listOfUploads);
  q(CONTAINER_SELECTOR).innerHTML = toUploadView(uploadValue,listOfUploads);
  pageMemo.addLast(q(CONTAINER_SELECTOR).innerHTML);
};

const renderTrending = async () => {
  const trendingGifs = await loadTrending(30);
  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trendingGifs);
  pageMemo.addLast(q(CONTAINER_SELECTOR).innerHTML);
};
export const renderGifDetails = async (id) => {
  const details = await loadGifId(id);
  q(CONTAINER_SELECTOR).innerHTML = toGifDetailsView(details);
  pageMemo.addLast(q(CONTAINER_SELECTOR).innerHTML);
};

export const renderUploadGifDetails = (id) => {
  const details = loadUploadGifId(id);
  q(CONTAINER_SELECTOR).innerHTML = myGifDetailsView(details);
  pageMemo.addLast(q(CONTAINER_SELECTOR).innerHTML);
};

export const renderFavorites = async () => {
  const favorites = await loadFavoriteGifs();
  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favorites);
  if (pageMemo.tail.favorite) {
    console.log(pageMemo.tail.favorite)
    pageMemo.tail.value = q(CONTAINER_SELECTOR).innerHTML;
    return;
  }
  pageMemo.addLast(q(CONTAINER_SELECTOR).innerHTML);
  pageMemo.tail.favorite=1;
};

const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
  pageMemo.addLast(q(CONTAINER_SELECTOR).innerHTML);
};
