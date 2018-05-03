/* ======================================= ABOUT ======================================= */

/**
 * figure out what set of credentials to return (dev / prod)
 */

/* ======================================= KEYS ======================================== */

if (process.env.NODE_ENV === "production") {
  //production enviroment
  module.exports = require('./prod');
} else {
  //development enviroment
  module.exports = require('./dev');
}
