const tailwindcss = require("tailwindcss");
const talwindConfig = require("../tailwind.config");

module.exports = {
  plugins: [tailwindcss(talwindConfig), require("autoprefixer")],
};
