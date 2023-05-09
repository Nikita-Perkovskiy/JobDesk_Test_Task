import { getFromLS } from "../LSFunctions/getFromLS";

export const addMyFavoritePost = (postId, vacation_list_key, setfunc) => {
  const productList = getFromLS(vacation_list_key);
  console.log("productList", productList);
  const targetVacansion = productList.find((el) => (el.id = postId));
  console.log("targetVacansion", targetVacansion);
  setfunc(targetVacansion);
  console.log("addMyFavoritePost", addMyFavoritePost);
};
