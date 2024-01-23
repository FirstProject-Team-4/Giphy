
/**
 * Converts a trendingItem object into a GIF details view HTML string.
 * @param {Object} trendingItem - The trendingItem object.
 * @returns {string} - The HTML string representing the GIF details view.
 */
 export const toGifDetailsView=(trendingItem)=>{
  if(!trendingItem.user){
   trendingItem.user={username:'Anonymous',
   avatar_url:'https://media.giphy.com/avatars/default5.gif',// prevents bug when user is not defined
   description:'No description'}
  }
  return`
  <div class= 'card'>
  <h1 class='uploadTitle'>Details:</h1>
  <div class='content-container'>
    <div class='Gif-title'>
    <h1 class='Gif-title'>Title: ${trendingItem.title}</h1>
    <img src="${trendingItem.images.fixed_width.url}" alt="${trendingItem.title}" id='trending-img'>
    <p id='description'>Description: ${trendingItem.user.description}</p>
    </div>
    <div id='text'>
    <p class='Gif-user' id='username'>User: ${trendingItem.user.username}</p>
    <img src='${trendingItem.user.avatar_url}' alt="${trendingItem.user.username}" class='Gif-img' id='img-trendig'>
    </div>
  </div>
</div>
`}
