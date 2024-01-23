export const myGifDetailsView=(gifItem)=>{
    console.log(gifItem)
    return`
  

  <h1 id='uploadTitle'>Details for Gif</h1>
  <h1 class='Gif-title'>Title: ${gifItem.myTitle}</h1>
  

  
  <img src="${gifItem.images.fixed_width.url}" class='myGifUpload'> 
  <span class='Gif-user'>Name: ${gifItem.myUser}</span>
  <span class='myGifUpload-date'>Date: ${gifItem.myDate}</span>
  <span><img src='${gifItem.user.avatar_url}' alt="${gifItem.user.username}" class='Gif-img'></span>

  `}
