
import { renderFavoriteStatus } from "../events/favorites-events.js";
export const  toUploadView =(uploadValue, uploadList) => {
  return `
 
      <div class=upload>
      <button class="openFormButton">Open Form</button>
      <h2>My Uploads</h2>
      
      <div id="formModal">
   
      <div id='form'>
      <button class='closeButton'>X</button>
      <h2>Upload Gif</h2>
      <input type="text" id="input1" placeholder="user">
      <p id='user-error'> </p>
      <input type="text" id="input2" placeholder="gif title">
      
      <p id='title-error'> </p>
      <input type="file" id="fileInput" value="${uploadValue || ''}">
      <p id='file-error'> </p>
      <button class='uploadGif' type="submit">Submit</button>
      <p> </p>
      </div>
      </div>
       <div>
      <li>
      ${checkType(uploadList)}
    </li>
    </div>
      `;
};
const checkType = (element) => {
  if (Array.isArray(element)) {
    return element.map((element) => gifUpload(element));
    
  }
  return`<h2>No uploads</h2>`
};
export const gifUpload =(gif) => 
`
<li>
  <img src="${gif.images.fixed_width.url}" alt="${gif.title}" class='idGif' data='${gif.id}'>
  <span class="favorite-status"> <data-gif-id="${gif.id}">${renderFavoriteStatus(gif.id)}</span>
</li>
`;

