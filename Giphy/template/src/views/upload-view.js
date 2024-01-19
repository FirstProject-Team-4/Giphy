export const toUploadView = (uploadValue) => {
    return `
      <div class=upload>
      <button class="openFormButton">Open Form</button>

      <div id="formModal">

      <div id='form'>
      <button class='closeButton'>X</button>
      <h2>Upload Gif</h2>
      <input type="text" id="input1" placeholder="user">
      <p> </p>
      <input type="text" id="input2" placeholder="gif title">
      
      <p> </p>
      <input type="file" id="fileInput" value="${uploadValue || ''}">
      <p> </p>
      <button class='uploadGif' type="submit">Submit</button>
      <p> </p>
      </div>
      `;
    };
    // <button class="uploadGif" >Upload GIF</button>


