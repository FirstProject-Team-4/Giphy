import { q } from "./helpers.js";

export const activeToggle = (page) => {
const currentActive = q('.activePage');
if(currentActive){
  currentActive.classList.remove('activePage');
}
page.tail.active.classList.add('activePage');
}
