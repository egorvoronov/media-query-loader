const loaderUtils = require("loader-utils");

// Adding media queries
module.exports = function(source) {
  const options = loaderUtils.getOptions(this);
  if(!options.media) {
    throw new Error('media prop is absent in options');
  }
  const mediaBeginning = `@media ${options.media} {`;
  const mediaEnding = `}`;
  this.callback(null, mediaBeginning + source + mediaEnding);
};
