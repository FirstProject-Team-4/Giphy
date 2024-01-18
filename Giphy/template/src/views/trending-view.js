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
<button class='idGif' data='${trendingItem.id}'>Button</button>
<li>
  <img src="${trendingItem.images.fixed_width.url}" alt="${trendingItem.title}">
  </button>
</a>
</li>

`