/* eslint-disable linebreak-style */
/**
 * Generates the HTML template for the home view.
 * @return {string} The HTML template for the home view.
 */
export const toHomeView=()=>{
  return `
    <section class="category">
    <h2 id='home-view'> Choose your category and have fun😄</h2>
  
    <button class='category-button' type='cat' >Cats</button>
    <button class='category-button' type='dog' >Dogs</button>
    <button class='category-button' type='Sports' >Sports</button>
    <button class='category-button' type='happy' >Happy</button>
    <button class='category-button' type='sad' >Sad</button>
    <button class='category-button' type='Gaming' >Gaming</button>
    <button class='category-button' type='emodji' >Emodji</button>
    <button class='category-button' type='Stickers'>Stickers</button>
    <button class='category-button' type='Entertainment'>Entertainment</button>
    <button class='category-button' type='angry' >Angry</button>
    <button class='category-button' type='Cute' >Cute</button>
    <button class='category-button' type='Reaction' >Reaction</button>
    <button class='category-button' type='Food and Drink' >Food & Drink</button>
    </div>
  </section>
  `;
};
