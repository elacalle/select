module.exports = {
  presets: [
    [
      '@babel/preset-env', 
      {
        "targets": {
          "browsers": ["> 1%", "last 2 versions", "not ie <= 8", "ie >= 11"]
        }
      }
    ]
  ],
  env: {
    test: {
      plugins: ["@babel/plugin-transform-runtime"]
    }
  }
};