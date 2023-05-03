export const sendRequest = async (url, options) => {
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
  // const response = await fetch(url);
  // const result = await response.json();
  // return result;
};
