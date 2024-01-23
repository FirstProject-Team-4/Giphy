/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable func-style */
import { POST_URL, ID_URL } from '../common/constants.js';
import { addUpload } from '../data/my-uploads.js';
import { renderUpload } from './navigation-events.js';
import { deleteUpload } from '../data/my-uploads.js';
import { loadingScreenOn } from './loading-screen-event.js';


/**
 * Uploads a file using a POST request and adds the uploaded file to the UI.
 * @param {FormData} formData - The form data containing the file to be uploaded.
 * @param {string} user - The user's information.
 * @param {string} gifTitle - The title of the GIF.
 * @return {Promise<void>} - A promise that resolves when the file is uploaded and added to the UI.
 */
export async function filePost(formData, user, gifTitle) {
  try {
    loadingScreenOn();
    const postResponse = await fetch(`${POST_URL}`, {
      method: 'POST',
      body: formData,
    });

    const responseData = await postResponse.json(); // gets the response id
    const getData = await fetch(ID_URL(responseData.data.id));
    const response = await getData.json();

    addUpload(response.data, user, gifTitle);
  } catch (error) {
    console.log('Error during Upload GIF!: ', error.message);
  }

}

/**
 * Deletes an upload with the specified ID.
 * @param {string} id - The ID of the upload to delete.
 */
export function deleteUploadHandler(id) {
  deleteUpload(id);
  renderUpload();
}
