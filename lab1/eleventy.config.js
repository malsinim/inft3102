
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/public");
    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "dist"
      }
    }
  };