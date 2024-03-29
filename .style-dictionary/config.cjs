module.exports = {
  source: [".style-dictionary/tokens/converted_tokens.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: ".style-dictionary/dist/",
      files: [
        {
          destination: "design-tokens.scss",
          format: "scss/variables",
        },
      ],
      options: {
        showFileHeader: false,
      }
    },
    js: {
      transformGroup: "js",
      buildPath: ".style-dictionary/dist/",
      files: [
        {
          destination: "design-tokens.js",
          format: "javascript/es6",
        },
      ]
    }
  }
};