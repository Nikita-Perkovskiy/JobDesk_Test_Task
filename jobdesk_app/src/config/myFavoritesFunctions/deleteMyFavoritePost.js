export const deleteMyFavoritePost = (postId, myFavPost, setFunc) => {
  const cleanArray = myFavPost.filter((el) => el.id !== postId);
  setFunc(cleanArray);
  console.log("deleteMyFavoritePost", deleteMyFavoritePost);
};
