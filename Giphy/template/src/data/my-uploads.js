let uploadsList = JSON.parse(localStorage.getItem('myUploads')) || [];

export const addUpload = (id, user, gifTitle) => {
  const object = { 
    id,
    user,
    gifTitle
  };

  uploadsList.push(object);
  console.log(object);
  localStorage.setItem('myUploads', JSON.stringify(uploadsList));
};

export const deleteUpload = (id) => {
  uploadsList = uploadsList.filter(upload => upload.id !== id);
  localStorage.setItem('myUploads', JSON.stringify(uploadsList));
};

export const getMyUploads = () => [...uploadsList];