import { POST_URL } from "../common/constants.js";
import { addUpload } from "../data/my-uploads.js";
import { renderUpload } from "./navigation-events.js";
import { deleteUpload } from "../data/my-uploads.js";

export const loadingScreen = async () => {
    document.getElementById('formModal').style.display = 'none';
    document.getElementById('loader').style.display = 'block';

    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        renderUpload();
      }, 8000);
}

export function perform(formData, user, gifTitle) {
    try {
        loadingScreen()
        const response = fetch(`${POST_URL}`, {
            method: 'POST',
            body: formData
        }).then(response => response.json()).then(data => addUpload(data, user, gifTitle))
        return response;
    } catch (error) {
        console.log('Error during Upload GIF!: ', error.message);
    }

}

export function deleteUploadHandler(id) {
    deleteUpload(id);
    renderUpload();
}
