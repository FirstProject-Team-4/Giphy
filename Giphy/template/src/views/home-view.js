import { renderFavoriteStatus } from "../events/favorites-events.js";
export const toHomeView=()=>{
    return `
    <section class="category">
    <h2> Gifs:</h2>
    <button class='category-button' type='cat' >Cats</button>
    <button class='category-button' type='dog' >Dogs</button>
    <button class='category-button' type='Sports' >Sports</button>
    <button class='category-button' type='happy' >happy</button>
    <button class='category-button' type='sad' >sad</button>
    <button class='category-button' type='Gaming' >Gaming</button>
    <button class='category-button' type='Gaming' >Gaming</button>
  </section>
  `;
};



