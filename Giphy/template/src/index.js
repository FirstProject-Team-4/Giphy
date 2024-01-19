import { APY_KEY, HOME } from './common/constants.js';
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
    // if (event.target.classList.contains('uploadGif')) {


    // // const unploadFN=async()=>{
    // //   const unpload = q('#fileInput').files[0];
    // //   const formData = new FormData();
    // //   formData.append('file', unpload);
    // //   const response = await fetch(`https://upload.giphy.com/v1/gifs?api_key=${APY_KEY}`, {
    // //     method: 'POST',
    // //     body: formData,
    //   });
    //   console.log(response.json());
    //   return response;
    // }
    //   unploadFN();
    // }

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