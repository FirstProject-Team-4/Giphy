// Assuming you have a function to handle the actual upload logic
// const handleGifUpload = async (file) => {
//     try {
//         // Implement your upload logic here (e.g., using fetch or Axios)
//         const response = await fetch('/upload', {
//             method: 'POST',
//             body: file,
//         });

//         const result = await response.json();

//         if (result.success) {
//             alert(`GIF uploaded successfully! Giphy ID: ${result.giphyId}`);
//         } else {
//             alert('Failed to upload GIF. Please try again.');
//         }
//     } catch (error) {
//         console.error(error);
//         alert('An error occurred during the upload. Please check the console.');
//     }
// };

// // Function to handle the click event on the "Upload GIF" button
// window.uploadGif = () => {
//     const fileInput = document.getElementById('fileInput');
//     const file = fileInput.files[0];

//     if (file) {
//         handleGifUpload(file);
//     } else {
//         alert('Please select a GIF file before uploading.');
//     }
// };
