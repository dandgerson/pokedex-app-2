module.exports = {
  './src/**/*.{js,jsx,ts,tsx,json,css}': [
    "eslint ./src --fix",
    "pretty-quick --staged",
  ],
}
