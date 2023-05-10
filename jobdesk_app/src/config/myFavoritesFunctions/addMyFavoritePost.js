import { getFromLS } from "../localStorageFunctions/getFromLS";

export const addMyFavoritePost = (postId, getFromLS_key, setfunc) => {
  const postList = getFromLS(getFromLS_key);
  const targetVacansion = postList.find((el) => (el.id = postId));
  if (targetVacansion !== undefined) {
    setfunc(targetVacansion);
  }
};
