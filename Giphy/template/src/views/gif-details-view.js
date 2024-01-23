 export const toGifDetailsView=(trendingItem)=>{
  console.log(trendingItem)
  if(!trendingItem.user){
   trendingItem.user={username:'Anonymous',
   avatar_url:'https://media.giphy.com/avatars/default5.gif',// prevents bug when user is not defined
   description:'No description'}
  }
  return`
<div class='single-gif-details'' >
<li>
<h1 id='uploadTitle'>Details for Gif</h1>
<h1 class='Gif-title'>Title: ${trendingItem.title}
</h1>
  <img src="${trendingItem.images.fixed_width.url}" alt="${trendingItem.title}">
</a>
<p class='Gif-user'>Name: ${trendingItem.user.username}</p>
</li>
</div>
<div class='description'>
<img src='${trendingItem.user.avatar_url}' alt="${trendingItem.user.username}" class='Gif-img'>
<p id='description'> ${trendingItem.user.description}</p>
</div>
`}
