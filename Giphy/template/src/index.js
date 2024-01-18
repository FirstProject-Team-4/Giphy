import { HOME } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage, } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { renderGifDetails } from './events/navigation-events.js';

document.addEventListener('DOMContentLoaded', () => {

  // add global listener
  document.addEventListener('click', event => {

    // nav events
    if (event.target.classList.contains('nav-link')) {

      loadPage(event.target.getAttribute('data-page'));
    }

    // show category events
    if (event.target.classList.contains('idGif')) {
      console.log(event.target.getAttribute('data'));
      renderGifDetails(event.target.getAttribute('data'));
    }

  //   // show movie events
  //   if (event.target.classList.contains(/* your button class here */)) {
  //     renderMovieDetails(+event.target.getAttribute(/* your correct data attribute here */));
  //   }

    // toggle favorite event
    if (event.target.classList.contains('favorite')) {
      toggleFavoriteStatus(event.target.getAttribute('data-gif-id'));
    }
    if(event.target.classList.contains('search-button')){

      const search =q('#search').value
      console.log(search);
      renderSearchItems(search);
    }

   });
   document.getElementById('search').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const search = q('#search').value;
      console.log(search);
      renderSearchItems(search);
    }
});


  loadPage(HOME);
  


});