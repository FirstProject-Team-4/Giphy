import { q } from "../src/events/helpers.js";

export const validateForm = (user,gifTitle,file) => {
    if (!user) {
        q('#user-error').innerHTML = 'User is required';
      }
      else{
        q('#user-error').innerHTML = '';
      }

      if (!gifTitle) {
        q('#title-error').innerHTML = 'Gif title is required';
      }
        else{
            q('#title-error').innerHTML = '';
        }

      if (file) {
        if (file.type !== 'image/gif') {
          q('#file-error').innerHTML = 'The uploaded file is not a gif';
        }
        else{
            q('#file-error').innerHTML = '';
        }
      } else {
        q('#file-error').innerHTML = 'File is required';
      }

      if (user && gifTitle && file.type === 'image/gif') {
        
        return true;
      }
        return false;
}