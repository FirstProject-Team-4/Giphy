import { POST_URL } from "../common/constants.js";
export  function perform(formData) {
    try {
        const response = fetch(`${POST_URL}`, {
            method: 'POST',
            headers: {
                user: 'user',
            },
            body: formData,
        }).then(response => response.json()).then(data => console.log(data));
        //return response;
    } catch (error) {
        console.log('Error during Upload GIF!: ', error.message);
    }
    
}