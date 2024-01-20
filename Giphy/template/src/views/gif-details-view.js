 export const toGifDetailsView=(trendingItem)=>`
<div class='single-gif-details'' >
<li>
<h1>${trendingItem.title}
</h1>
  <img src="${trendingItem.images.fixed_width.url}" alt="${trendingItem.title}">
</a>
<p>${trendingItem.user.username}</p>
</li>
</div>
<div class='description'>
<img src='${trendingItem.user.avatar_url}' alt="${trendingItem.user.username}">
<p>${trendingItem.user.description}</p>
</div>
`
