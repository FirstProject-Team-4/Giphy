/* eslint-disable linebreak-style */
import { loadingScreenOff } from '../events/loading-screen-event.js';

let uploadsList = JSON.parse(localStorage.getItem('myUploads')) || [];

/**
 * Adds an upload to the uploads list and saves it to local storage.
 * @param {Object} dataObject - The data object containing the upload information.
 * @param {string} user - The user associated with the upload.
 * @param {string} gifTitle - The title of the uploaded GIF.
 */
export const addUpload = (dataObject, user, gifTitle) => {

  dataObject.myUser = user;
  dataObject.myTitle = gifTitle;
  dataObject.myDate = new Date().toLocaleDateString();
  console.log(dataObject);
  uploadsList.push(dataObject);

  localStorage.setItem('myUploads', JSON.stringify(uploadsList));
  loadingScreenOff();
};

/**
 * Deletes an upload from the uploads list and updates the localStorage.
 * @param {string} id - The ID of the upload to be deleted.
 */
export const deleteUpload = (id) => {

  uploadsList = uploadsList.filter(upload => upload.id !== id);
  localStorage.setItem('myUploads', JSON.stringify(uploadsList));
};

/**
 * Retrieves the list of my uploads.
 * @return {Array} The list of my uploads.
 */
export const getMyUploads = () => [...uploadsList];
