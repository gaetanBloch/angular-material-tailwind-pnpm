module.exports = {
  '{src/**/,}*.{js,ts}': ['eslint --fix'],
  '{src/**/,}*.{md,json,yml,html,css,scss,xml}': ['prettier --write'],
};
