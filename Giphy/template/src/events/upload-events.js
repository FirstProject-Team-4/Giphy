import { POST_URL,ID_URL } from "../common/constants.js";
import { addUpload } from "../data/my-uploads.js";
import { renderUpload } from "./navigation-events.js";
import { deleteUpload } from "../data/my-uploads.js";

export const loadingScreen =  () => {
    document.getElementById('formModal').style.display = 'none';
    document.getElementById('loader').style.display = 'block';
}
export const loadingScreenOff=()=>{
    document.getElementById('loader').style.display = 'none';
    renderUpload();
}
// setTimeout(() => {
//     document.getElementById('loader').style.display = 'none';
//     renderUpload();
//   }, 8000);

export async function filePost(formData, user, gifTitle) {
    try {
      
               loadingScreen()
        const postResponse =await fetch(`${POST_URL}`, {
            method: 'POST',
            body: formData
        })

        const responseData = await postResponse.json(); // gets the response id
        const getData = await fetch(ID_URL(responseData.data.id));
        const response = await getData.json();
 
        addUpload(response.data, user, gifTitle);
    } catch (error) {
        console.log('Error during Upload GIF!: ', error.message);
    }

}

export function deleteUploadHandler(id) {
    deleteUpload(id);
    renderUpload();
}
