export const convertTime = (time) => {
  return new Date(time * 1000).toUTCString().slice(5, 22);
};

export const isContainesJustId = (element) => {
  const { id, ...others } = element;
  return Object.keys(others).length === 0;
};

export const isArrayEmpty = (arr) => arr.length === 0;
