module.exports = {
  '*.css': 'stylelint --ignore-path .gitignore --fix --cache',
  '*.{js,jsx,ts,tsx}': 'eslint --ignore-path .gitignore --cache --fix',
  '*.{ts,tsx}': () => 'tsc -p tsconfig.json --noEmit',
  '*.{js,jsx,ts,tsx,css,md}': 'prettier --ignore-path .gitignore --write',
};
