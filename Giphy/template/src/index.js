/* eslint-disable linebreak-style */
import { HOME } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { renderGifDetails } from './events/navigation-events.js';
import { filePost } from './events/upload-events.js';
import { CONTAINER_SELECTOR } from './common/constants.js';
import { deleteUploadHandler } from './events/upload-events.js';
import { validateForm } from './validations/form-validation.js';
import { renderCategory } from './events/home-events.js';
import { renderFavorites } from './events/navigation-events.js';
import { pageMemo } from './data/pageMemorization.js';
import { activeToggle } from './data/pageMemorization.js';
import { renderUploadGifDetails } from './events/navigation-events.js';

document.addEventListener('DOMContentLoaded', () => {
  let memoryContainer;
  // add global listener
  document.addEventListener('click', event => {

    // nav events
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }
    // category
    if (event.target.classList.contains('category-button')) {
      renderCategory(event.target.getAttribute('type'));
      pageMemo.addLast(q(CONTAINER_SELECTOR).innerHTML);
    }

    // full screen events
    if (event.target.matches('.fullscreen-button')) {
      const gifUrl = event.target.getAttribute('data-gif-url');
      memoryContainer = q(CONTAINER_SELECTOR).innerHTML;
      q(CONTAINER_SELECTOR).innerHTML = `<img src="${gifUrl}" alt="gif" class="fullscreen-gif">`;

    }
    // disable full screen
    if (event.target.classList.contains('fullscreen-gif')) {
      event.target.classList.remove('fullscreen-gif');
      q(CONTAINER_SELECTOR).innerHTML = memoryContainer;
    }
    // single-gif-details events
    if (event.target.classList.contains('idGif')) {
      renderGifDetails(event.target.getAttribute('data'));
      pageMemo.addLast(q(CONTAINER_SELECTOR).innerHTML);
    }

    // my-upload-single-details events
    if (event.target.classList.contains('myUploadGif')) {
      renderUploadGifDetails(event.target.getAttribute('data'));
      pageMemo.addLast(q(CONTAINER_SELECTOR).innerHTML);
    }
    // close-button
    if (event.target.classList.contains('closeButton')) {
      document.getElementById('formModal').style.display = 'none';
    }

    // open-form-button
    if (event.target.classList.contains('openFormButton')) {
      q('#user-error').innerHTML = '';
      q('#title-error').innerHTML = '';
      q('#file-error').innerHTML = '';
      document.getElementById('formModal').style.display = 'block';
    }

    // submit-button
    if (event.target.classList.contains('submit-button')) {

      const fileInput = q('#fileInput');
      const user = q('#input1').value; // input 1 -user
      const gifTitle = q('#input2').value; // input 2 -gif title
      const file = fileInput.files[0]; // input 3 -file
      if (validateForm(user, gifTitle, file)) {
        const formData = new FormData();
        formData.append('file', file);
        filePost(formData, user, gifTitle);
        pageMemo.tail = pageMemo.tail.prev;
      }
    }

    // delete-button
    if (event.target.classList.contains('delete-button')) {
      console.log(event.target.getAttribute('delete'));
      pageMemo.tail = pageMemo.tail.prev;
      deleteUploadHandler(event.target.getAttribute('delete'));

    }
    // favorite-button-events
    if (event.target.classList.contains('favorite')) {
      toggleFavoriteStatus(event.target.getAttribute('data-gif-id'));
      const activePage = q('.activePage');
      if (activePage && activePage.id === 'favoritesID') {
        pageMemo.tail = pageMemo.tail.prev;
        renderFavorites();

      }
    }
    // search-button
    if (event.target.classList.contains('search-button')) {
      const search = q('#search').value;
      if (!search) {
        return;
      }
      const activePage = q('.activePage');
      if (activePage) {
        activePage.classList.remove('activePage');
      }
      q('#search').value = '';
      renderSearchItems(search);
    }
    // previous-button
    if (event.target.classList.contains('previous-button')) {
      if (!pageMemo.tail.prev) {
        return;
      }
      pageMemo.tail = pageMemo.tail.prev;
      q(CONTAINER_SELECTOR).innerHTML = pageMemo.tail.value;
      if (pageMemo.tail.active) {
        activeToggle(pageMemo);
      }

    }
    // next-button
    if (event.target.classList.contains('next-button')) {
      if (!pageMemo.tail.next) {
        return;
      }
      pageMemo.tail = pageMemo.tail.next;
      q(CONTAINER_SELECTOR).innerHTML = pageMemo.tail.value;

      if (pageMemo.tail.active) {
        activeToggle(pageMemo);
      }
    }

  });

  // search-button-enter
  document.getElementById('search').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const search = q('#search').value;
      if (!search) {
        return;
      }
      const activePage = q('.activePage');
      if (activePage) {
        activePage.classList.remove('activePage');
      }
      q('#search').value = '';
      renderSearchItems(search);

    }


  });


  loadPage(HOME);


});
