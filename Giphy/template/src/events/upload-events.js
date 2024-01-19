import { POST_URL } from "../common/constants.js";
import { addUpload } from "../data/my-uploads.js";
export  function perform(formData,user,gifTitle){
    try {
        const response = fetch(`${POST_URL}`, {
            method: 'POST',
            body: formData
        }).then(response => response.json()).then(data => addUpload(data, user, gifTitle))
        return response;
    } catch (error) {
        console.log('Error during Upload GIF!: ', error.message);
    }

    
}