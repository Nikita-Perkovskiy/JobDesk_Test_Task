export const verifyVacansionList = (data) => {
  const res = [];
  data.forEach((el) => {
    const targetId = data.filter((e) => e.id === el.id);
    if (targetId.length === 1) {
      res.push(el);
    }
  });
  return res;
};
