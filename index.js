'use strict'

module.exports = function isCapitalized (str) {
  if (typeof str !== 'string') throw new TypeError('Argument must be a string')
  return str[0] === str[0].toUpperCase()
}
