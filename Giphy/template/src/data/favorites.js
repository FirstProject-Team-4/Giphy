let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

/**
 * Adds a movie to the favorites list.
 * @param {string} gifId - The ID of the gif to be added.
 */
export const addFavorite = (gifId) => {
  if (favorites.find(id => id === gifId)) {
    // Movie has already been added to favorites
    return;
  }

  favorites.push(gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Removes a favorite GIF from the favorites list and updates the local storage.
 * @param {string} gifId - The ID of the GIF to be removed.
 */
export const removeFavorite = (gifId) => {
  favorites = favorites.filter(id => id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Retrieves the favorites array.
 * @returns {Array} The favorites array.
 */
export const getFavorites = () => [...favorites];
