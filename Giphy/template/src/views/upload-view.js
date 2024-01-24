/* eslint-disable linebreak-style */
import { renderFavoriteStatus } from '../events/favorites-events.js';
/**
 * Converts the upload value and upload list into an HTML string representing the upload view.
 * @param {string} uploadValue - The value of the upload input field.
 * @param {Array} uploadList - The list of uploaded items.
 * @return {string} - The HTML string representing the upload view.
 */
export const toUploadView =(uploadValue, uploadList) => {
  return `
 
      <div class=upload>
      <button class="openFormButton">Upload Gif</button>
      <h2>📥My Uploads</h2>
      
      <div id="formModal">
   
      <div id='form'>
      <button class='closeButton'>X</button>
      <h2 id='upload'>Upload Gif</h2>
      <input type="text" id="input1" placeholder="user">
      <p id='user-error'> </p>
      <input type="text" id="input2" placeholder="gif title">
      
      <p id='title-error'> </p>
      <input type="file" id="fileInput" value="${uploadValue || ''}">
      <p id='file-error'> </p>
      <button class='submit-button' type="submit">Submit</button>
      <p></p>
      </div>
      </div>
      <div id="loader"></div>
      <div class='gif-page'>${checkType(uploadList)}</div>`;
};
/**
 * Checks the type of an element and returns the corresponding HTML string.
 * If the element is an array, it maps each element to the gifUpload function and joins the results.
 * If the element is not an array, it returns a string indicating no uploads.
 * @param {any} element - The element to check the type of.
 * @return {string} - The HTML string based on the type of the element.
 */
const checkType = (element) => {
  if (Array.isArray(element) && element.length > 0) {
    return element.map((e) => gifUpload(e)).join('');
  }
  return `The upload list is empty.`;
};


/**
 * Renders a GIF upload item.
 *
 * @param {Object} gif - The GIF object.
 * @return {string} - The HTML markup for the GIF upload item.
 */
export const gifUpload =(gif) => {
  return `<div class="gif-item">
<div class='gif-box'>
    <img src="${gif.images.fixed_width.url}" alt="${gif.title}" class='myUploadGif' data='${gif.id}'>
    <div class="controls">
      <span class="favorite-status"><data-gif-id="${gif.id}">${renderFavoriteStatus(gif.id)}</span>
      <span class="fullscreen-button" data-gif-url="${gif.images.fixed_width.url}" id='fullscreen'>⛶</span>
      <span class='delete-button' delete='${gif.id}'>❌</span>
    </div>
  </div>
</div>
`;
};

