export const addMyFavorite = (
  postId,
  getFromLS,
  vacation_list_key,
  setfunc
) => {
  const productList = getFromLS(vacation_list_key);
  const targetVacansion = productList.find((el) => (el.id = postId));
  setfunc(targetVacansion);
};
