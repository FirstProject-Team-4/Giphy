import { renderUpload } from "./navigation-events.js";


export const loadingScreenOn =  () => {
    document.getElementById('formModal').style.display = 'none';
    document.getElementById('loader').style.display = 'block';
}

export const loadingScreenOff=()=>{
    document.getElementById('loader').style.display = 'none';
    renderUpload();
}