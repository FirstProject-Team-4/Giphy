import { HOME } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage, } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { renderGifDetails } from './events/navigation-events.js';
import { perform } from './events/upload-events.js';


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

    //closeButton
    if (event.target.classList.contains('closeButton')) {
      document.getElementById('formModal').style.display = 'none';
    }

    //openFormButton
    if (event.target.classList.contains('openFormButton')) {
      document.getElementById('formModal').style.display = 'block';
    }

    if (event.target.classList.contains('uploadGif')) {
      const fileInput = q('#fileInput');
      const file = fileInput.files[0];

      if (file) {
        const formData = new FormData();
        formData.append('file', file);

        console.log(perform(formData));
      } else {
        console.error('Please select a file to upload.');
      }
    } 
    
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

  
   }
});


  loadPage(HOME);
  

});