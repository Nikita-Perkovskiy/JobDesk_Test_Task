export const addToLS = (LSkey, data) => {
  localStorage.setItem(LSkey, JSON.stringify(data.objects));
};
