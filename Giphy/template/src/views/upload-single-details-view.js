export const myGifDetailsView = (gifItem) => {
  return `
  
<div class= 'card'>
  <h1 id='uploadTitle'>Details for Gif</h1>
     <div class='Gif-title'>
  <h1 >Title: ${gifItem.myTitle}</h1>
        <div id='text'>
  <img src="${gifItem.images.fixed_width.url}" class='myGifUpload'> 
  <p class='Gif-user'>Name: ${gifItem.myUser}</p>
  <p class='myGifUpload-date'>Date: ${gifItem.myDate}</p>
  <p><img src='${gifItem.user.avatar_url}' alt="${gifItem.user.username}" class='Gif-img'></p>
</div>
</div>
</div>
  `}
