const activeMenubarFirst = require('./activeMenubarFirst.js')
const activeMenubarLast = require('./activeMenubarLast.js')
const menubarFirst = require('./menubarFirst.js')
const menubarLast = require('./menubarLast.js')
module.exports = {
  ...activeMenubarFirst,
  ...activeMenubarLast,
  ...menubarFirst,
  ...menubarLast
}
