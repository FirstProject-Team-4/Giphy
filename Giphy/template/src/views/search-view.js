import { renderFavoriteStatus } from "../events/favorites-events.js";
export const toSearchView=(searchGifs)=>{
    return `
    <section class="trending">
    <h2>Search Gifs:</h2>
    <ul>
      ${searchGifs.map(toSearchItemView).join('')}
    </ul>
  </section>
  `;
};

export const toSearchItemView=(searchItem)=>`
<li>
    <img src="${searchItem.images.fixed_width.url}" alt="${searchItem.title}" class='idGif' data='${searchItem.id}'>
    <span class="favorite-status"> <data-gif-id="${searchItem.id}">${renderFavoriteStatus(searchItem.id)}</span>
    <span class="fullscreen-button" data-gif-url="${searchItem.images.fixed_width.url}" id='fullscreen'>🔍</span>
</li>
`;
