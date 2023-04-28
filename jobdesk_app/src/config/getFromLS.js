const getFromLS = (key) => {
  const lsItem = localStorage.getItem(key);
  if (!lsItem) return [];
  try {
    const value = JSON.parse(lsItem);
    return value;
  } catch (e) {
    return [];
  }
};

export default getFromLS;
