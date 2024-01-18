export const toTrendingView=(trendingGifs)=>{
    return `
    <section class="trending">
    <h2>Trending</h2>
    <ul>
      ${trendingGifs.map(toTrendingItemView).join('')}
    </ul>
  </section>
  `;
};

const toTrendingItemView=(trendingItem)=>`
<li>
    <img src="${trendingItem.images.fixed_width.url}" alt="${trendingItem.title}" class='idGif' data='${trendingItem.id}'>
</li>
`;