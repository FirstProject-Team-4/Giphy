import { renderFavoriteStatus } from "../events/favorites-events.js";
export const toTrendingView=(trendingGifs)=>{
    return `
    <section class="trending">
    <h2>Trending</h2>
    <div>
      ${trendingGifs.map(toTrendingItemView).join('')}
    </div>
  </section>
  `;
};

export const toTrendingItemView=(trendingItem)=>`
<div>
    <img src="${trendingItem.images.fixed_width.url}" alt="${trendingItem.title}" class='idGif' data='${trendingItem.id}'>
    <span class="favorite-status"> <data-gif-id="${trendingItem.id}">${renderFavoriteStatus(trendingItem.id)}</span>
    <span class="fullscreen-button" data-gif-url="${trendingItem.images.fixed_width.url}" id='fullscreen'>⛶</span>
</div>
`;

