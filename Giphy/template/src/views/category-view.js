import { renderFavoriteStatus } from "../events/favorites-events.js";
export const toCategoryView=(category)=>{
    return `
    <section class="category">
    <h2> Gifs:</h2>
  <div class='gif-page'>
  ${category.map(toCategoryItemView).join('')}
  </div>
</section>
  `;
};

export const toCategoryItemView=(searchItem)=>`
<div class='gif-box'>
    <img src="${searchItem.images.fixed_width.url}" alt="${searchItem.title}" class='idGif' data='${searchItem.id}'>
    <span class="favorite-status"> <data-gif-id="${searchItem.id}">${renderFavoriteStatus(searchItem.id)}</span>
    <span class="fullscreen-button" data-gif-url="${searchItem.images.fixed_width.url}" id='fullscreen'>⛶</span>
</div>
`;

