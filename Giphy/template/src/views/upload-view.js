export const toUploadView = (uploadValue) => {
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
      `;
    };
    // <button class="uploadGif" >Upload GIF</button>


