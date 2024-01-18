 export const toGifDetailsView=(trendingItem)=>`
<div class='single-gif-details'data='${trendingItem.id}' >
<li>
<h1>${trendingItem.title}
</h1>
<a href="${trendingItem.id}">
  <img src="${trendingItem.images.fixed_width.url}" alt="${trendingItem.title}">
</a>
<p>${trendingItem.user.username}</p>
</li>
</div>
`