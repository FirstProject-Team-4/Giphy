export const myGifDetailsView = (gifItem) => {
  return `
<div class= 'card'>
  <h1 class='uploadTitle'>Details:</h1>
  <div class='content-container'>
    <div class='Gif-title'>
      <h1>Title: ${gifItem.myTitle}</h1>
      <img src="${gifItem.images.fixed_width.url}" class='myGifUpload'> 
      <p class='myGifUpload-date'>Upoaded on: ${gifItem.myDate}</p>
    </div>
    <div id='text'>
    <p class='Gif-user'>User: ${gifItem.myUser}</p>
    <p><img src='${gifItem.user.avatar_url}' alt="${gifItem.user.username}" class='Gif-img'></p>
    </div>
  </div>
</div>
  `}
