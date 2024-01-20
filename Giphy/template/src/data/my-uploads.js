import { loadingScreenOff } from "../events/upload-events.js";
let uploadsList = JSON.parse(localStorage.getItem('myUploads')) || [];

export const addUpload = (dataObject, user, gifTitle) => {
 
  dataObject.myUser=user;
  dataObject.myTitle=gifTitle;
console.log(dataObject)
  uploadsList.push(dataObject);

  localStorage.setItem('myUploads', JSON.stringify(uploadsList));
loadingScreenOff();
};

export const deleteUpload = (id) => {

  uploadsList = uploadsList.filter(upload => upload.id !== id);
  localStorage.setItem('myUploads', JSON.stringify(uploadsList));
};

export const getMyUploads = () => [...uploadsList];