import { HOME } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage, } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { renderGifDetails } from './events/navigation-events.js';
import { filePost } from './events/upload-events.js';
import { CONTAINER_SELECTOR } from './common/constants.js';
import { deleteUploadHandler } from './events/upload-events.js';
import { renderCategory } from './events/home-events.js';

document.addEventListener('DOMContentLoaded', () => {
  let memoryContainer;
  // add global listener
  document.addEventListener('click', event => {

    // nav events
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }
    //category
    if (event.target.classList.contains('category-button')) {
      renderCategory(event.target.getAttribute('type'));
    }

    // full screen events
    if (event.target.matches('.fullscreen-button')) {
      const gifUrl = event.target.getAttribute('data-gif-url');
      memoryContainer = q(CONTAINER_SELECTOR).innerHTML;
      q(CONTAINER_SELECTOR).innerHTML = `<img src="${gifUrl}" alt="gif" class="fullscreen-gif">`;

    }
    //disable full screen
    if (event.target.classList.contains('fullscreen-gif')) {
      event.target.classList.remove('fullscreen-gif');
      q(CONTAINER_SELECTOR).innerHTML = memoryContainer;
    }
    // show  events
    if (event.target.classList.contains('idGif')) {
      renderGifDetails(event.target.getAttribute('data'));
    }

    //closeButton
    if (event.target.classList.contains('closeButton')) {
      document.getElementById('formModal').style.display = 'none';
    }

    //openFormButton
    if (event.target.classList.contains('openFormButton')) {
      q('#user-error').innerHTML = '';
      q('#title-error').innerHTML = '';
      q('#file-error').innerHTML = '';
      document.getElementById('formModal').style.display = 'block';
    }

    //submit-button
    if (event.target.classList.contains('submit-button')) {

      const fileInput = q('#fileInput');
      const user = q('#input1').value; // input 1 -user
      const gifTitle = q('#input2').value; // input 2 -gif title
      const file = fileInput.files[0]; // input 3 -file
      if (!user) {
        q('#user-error').innerHTML = 'User is required';
      }

      if (!gifTitle) {
        q('#title-error').innerHTML = 'Gif title is required';
      }

      if (file) {
        if (file.type !== 'image/gif') {
          q('#file-error').innerHTML = 'The uploaded file is not a gif';
        }
      } else {
        q('#file-error').innerHTML = 'File is required';
      }

      if (user && gifTitle && file.type === 'image/gif') {
        const formData = new FormData();
        formData.append('file', file);

        filePost(formData, user, gifTitle);
      }

    }

    //delete-button
    if (event.target.classList.contains('delete-button')) {
      console.log(event.target.getAttribute('delete'))
      deleteUploadHandler(event.target.getAttribute('delete'));

    }


    if (event.target.classList.contains('favorite')) {
      toggleFavoriteStatus(event.target.getAttribute('data-gif-id'));
    }
    //search-button
    if (event.target.classList.contains('search-button')) {
      const search = q('#search').value;
      if (!search) {
        return;
      }

      renderSearchItems(search);
    }

  });

  //let recentSearches = [];
  document.getElementById('search').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const search = q('#search').value;
      if (!search) {
        return;
      }

      renderSearchItems(search);


    }
  });


  loadPage(HOME);


});