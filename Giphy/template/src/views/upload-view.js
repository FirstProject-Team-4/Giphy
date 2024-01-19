export const toUploadView = (uploadValue) => {
    return `
      <div class=upload>
        <input type="file" id="fileInput" value="${uploadValue || ''}">
        <button class="uploadGif" >Upload GIF</button>
      </div>
    `;
  };

// export const toUploadView = () => {
//     return `
//     <form id="uploadForm">
//     <input type="file" id="fileInput" accept="image/gif" />
//     <button type="button" onclick="uploadGif()">Upload GIF</button>
// </form>
//     `;
//   };