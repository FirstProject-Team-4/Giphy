/* eslint-disable linebreak-style */
/**
 * Generates the HTML template for the home view.
 * @return {string} The HTML template for the home view.
 */
export const toHomeView=()=>{
  return `
    <section class="category">
    <h2 id='home-view'> Choose your category and have fun😄</h2>
  
    <button class='category-button' type='Cats' >Cats</button>
    <button class='category-button' type='Dogs' >Dogs</button>
    <button class='category-button' type='Sports' >Sports</button>
    <button class='category-button' type='Happy' >Happy</button>
    <button class='category-button' type='Sad' >Sad</button>
    <button class='category-button' type='Gaming' >Gaming</button>
    <button class='category-button' type='Emoji's' >Emoji</button>
    <button class='category-button' type='Stickers'>Stickers</button>
    <button class='category-button' type='Entertainments'>Entertainment</button>
    <button class='category-button' type='Angry' >Angry</button>
    <button class='category-button' type='Cute' >Cute</button>
    <button class='category-button' type='Reactions' >Reaction</button>
    <button class='category-button' type='Food and Drink's' >Food & Drink</button>
    </div>
  </section>
  `;
};
