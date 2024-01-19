export const toUploadView = (uploadValue, uploadList) => {
  return `
      <div class=upload>
      <button class="openFormButton">Open Form</button>

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
<div></div>
      `;
};

const singliUploadView = async (uploadList) => {
  const arrayID = uploadList.map(element=>element.id).join(',')
  const response = await fetch(IDs_URL(arrayID));
  const result = await response.json();
  return result.data;

}

export const uploadSingli = async(uploadList) => {
  const gif = await singliUploadView(uploadList);
  return `
  <section class="singli-upload">
  <ul>
    ${gif.map(gifUpload).join('')}
  </ul>
</section>
`;
};

export const gifUpload = (gif) => `
<li>
  <img src="${gif.images.fixed_width.url}" alt="${gif.title}" class='idGif' data='${gif.id}'>
  <span class="favorite-status"> <data-gif-id="${gif.id}">${renderFavoriteStatus(gif.id)}</span>
</li>
`;

