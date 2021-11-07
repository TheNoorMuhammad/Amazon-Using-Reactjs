module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "parser:babel-eslint",
    "eslint:recommended",
    "google",
  ],
  rules: {
    quotes: ["error", "double"],
  },
};
