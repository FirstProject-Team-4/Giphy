// // main.js

// function uploadGif() {
//     const fileInput = document.getElementById('fileInput');
//     const file = fileInput.files[0];

//     if (file) {
//         const formData = new FormData();
//         formData.append('gif', file);

//         fetch('http://localhost:3000/upload', {
//             method: 'POST',
//             body: formData,
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Upload successful:', data);
//             // Handle the response from the server as needed
//         })
//         .catch(error => {
//             console.error('Error uploading GIF:', error);
//             // Handle the error
//         });
//     } else {
//         alert('Please select a GIF to upload.');
//     }
// }
