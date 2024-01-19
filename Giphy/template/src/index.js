import { HOME } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage, } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { renderGifDetails } from './events/navigation-events.js';
import { renderUpload } from './events/navigation-events.js';

document.addEventListener('DOMContentLoaded', () => {

  // add global listener
  document.addEventListener('click', event => {

    // nav events
    if (event.target.classList.contains('nav-link')) {

      loadPage(event.target.getAttribute('data-page'));
    }

    // show  events
    if (event.target.classList.contains('idGif')) {
      console.log(event.target.getAttribute('data'));
      renderGifDetails(event.target.getAttribute('data'));
    }

    if (event.target.classList.contains('uploadGif')) {
      const unpload = q('#fileInput');
      const unploadValue=unpload.value
      // console.log(unpload)
      renderUpload(unploadValue);
    }

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
   //let recentSearches = [];
   document.getElementById('search').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const search = q('#search').value;
      renderSearchItems(search);

    //   // Add the search term to the start of the array
    //   recentSearches.unshift(search);

    //   // If the array length exceeds 5, remove the last item
    //   if (recentSearches.length > 5) {
    //     recentSearches.pop();
    //   }

    //   // Update the datalist
    //   const datalist = document.getElementById('recent-searches');
    //   datalist.innerHTML = recentSearches.map(term => `<option value="${term}">`).join('');
   }
});


  loadPage(HOME);
  


});