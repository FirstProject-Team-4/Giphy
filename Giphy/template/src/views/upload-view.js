export const toUploadView = (uploadValue) => {
    return `
      <div class=upload>
      <button class="openFormButton">Open Form</button>

      <div id="formModal">

      <div id='form'>
      <input type="text" id="input1" placeholder="Input 1">
      <input type="text" id="input2" placeholder="Input 2">
      <input type="file" id="fileInput" value="${uploadValue || ''}">
      <button class="uploadGif" >Upload GIF</button>
    <button type="submit">Submit</button>
    <button class='closeButton'>X</button>
</div>
    `;
};


