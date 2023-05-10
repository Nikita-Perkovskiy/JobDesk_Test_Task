import { getFromLS } from "../localStorageFunctions/getFromLS";

export const deleteMyFavoritePost = (postId, getFromLS_key, setfunc) => {
  const postList = getFromLS(getFromLS_key);
  const cleanMeFavoriteVacations = postList.filter((el) => el.id !== postId);
  console.log(cleanMeFavoriteVacations);
  setfunc(cleanMeFavoriteVacations);
};