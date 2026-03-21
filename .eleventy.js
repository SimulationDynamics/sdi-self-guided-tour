module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/logos");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Custom filter to check if a URL starts with a given prefix
  eleventyConfig.addFilter("startsWith", function(str, prefix) {
    if (!str) return false;
    return str.startsWith(prefix);
  });

  // Custom filter to find nav items
  eleventyConfig.addFilter("findByUrl", function(items, url) {
    return items.find(item => item.url === url);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
