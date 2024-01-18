export const toTrendingView=(trendingGifs)=>{
    return `
    <section class="trending">
    <h2>Trending</h2>
    <ul>
      ${trendingGifs.map(toTrengingItemView).join('')}
    </ul>
  </section>
  `;
};

const toTrengingItemView=(trendingItem)=>`
<li>
<a href="#/trending/${trendingItem.id}">
  <img src="${trendingItem.images.fixed_width.url}" alt="${trendingItem.title}">
</a>
</li>
`