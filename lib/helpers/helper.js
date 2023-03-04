/**
 * Helper function that converts an array of objects to strings in {chain:address}, {chain:address} format
 * @param {Array} [arr] An array of objects
 * @returns {string}
 * */
export const parseToTokenParams = (arr) => {
  return arr.map((obj) => Object.entries(obj).map(([key, value]) => `${key}:${value}`)).join(",");
};
