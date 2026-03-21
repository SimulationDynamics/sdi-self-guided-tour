const { HtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  // Automatically rewrite URLs to include pathPrefix
  eleventyConfig.addPlugin(HtmlBasePlugin);

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

  // Open all external links in a new tab
  eleventyConfig.addTransform("externalLinks", function(content) {
    if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
      content = content.replace(
        /<a\s+href="(https?:\/\/[^"]+)"(?![^>]*target=)/g,
        '<a href="$1" target="_blank" rel="noopener"'
      );
    }
    return content;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: "/"
  };
};
