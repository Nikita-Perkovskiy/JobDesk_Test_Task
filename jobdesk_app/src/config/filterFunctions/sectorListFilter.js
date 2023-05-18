export const sectorListFilter = (data) => {
  const res = [];
  data.forEach((element) => {
    res.push({ key: element.key, value: element.title_rus });
  });
  return res;
};
