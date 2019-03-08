module.exports = function unique(array) {
  if (Array.isArray(array)) throw new TypeError("unique wants an array!");
  return [... new Set(array)];
};