// https://github.com/c0bra/color-scheme-js
const ColorScheme = require('color-scheme');

module.exports =  function() {
  const hue = Math.floor(Math.random()*255)+1
  const scheme = new ColorScheme;
  scheme.from_hue(hue)         // Start the scheme 
        .scheme('mono')     // Use the 'triade' scheme, that is, colors
                              // selected from 3 points equidistant around
                              // the color wheel.
        .variation('soft');   // Use the 'soft' color variation

  const colors = scheme.colors();
  return colors;
};