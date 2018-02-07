'use strict'

const assert = require('assert')
const capitalized = require('.')

describe('capitalized()', function () {
  it('should return true if the first letter is uppercase', function () {
    assert(capitalized('Test'))
  })

  it('should return false if the first letter is lowercase', function () {
    assert(!capitalized('test'))
  })

  it('should throw a TypeError if the argument is not a string', function () {
    assert.throws(() => { capitalized(null) }, TypeError)
  })
})
