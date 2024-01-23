/* eslint-disable linebreak-style */
import { renderUpload } from './navigation-events.js';

/**
 * Turns on the loading screen by hiding the form modal and displaying the loader.
 */
export const loadingScreenOn = () => {
  document.getElementById('formModal').style.display = 'none';
  document.getElementById('loader').style.display = 'block';
};

/**
 * Turns off the loading screen by hiding the loader element and rendering the upload component.
 */
export const loadingScreenOff = () => {
  document.getElementById('loader').style.display = 'none';
  renderUpload();
};
