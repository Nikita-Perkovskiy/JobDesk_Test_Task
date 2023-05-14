import { getFromLS } from "../localStorageFunctions/getFromLS";

export const deletePost = (postId, getFromLS_key, setfunc) => {
  const postList = getFromLS(getFromLS_key);
  const cleanMeFavoriteVacations = postList.filter((el) => el.id !== postId);
  setfunc(cleanMeFavoriteVacations);
};
