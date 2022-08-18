const sha1 = require("sha1");

module.exports = {
  classNameSlug: function (hash, title, { name }) {
    return sha1(`${name}-${title}`).slice(0, 6); // гыгык
  },
};
