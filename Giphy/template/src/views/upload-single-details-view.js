export const myGifDetailsView=(gifItem)=>{
    console.log(gifItem)
    return`
  <div class='single-gif-details' >
  <li>
  <h1>${gifItem.myTitle}
  </h1>

  </a>
  <p>${gifItem.myUser}</p>
  <p>${gifItem.myData}</p>
  </li>
  </div>
  <div class='description'>
  <img src='${gifItem.user.avatar_url}' alt="${gifItem.user.username}">
  </div>
  `}