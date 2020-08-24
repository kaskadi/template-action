/* eslint-env mocha */
const runAction = require('./helpers/run-action.js')
const steps = ['pre', 'main', 'post']
const fs = require('fs')
const rimraf = require('rimraf')
const { spawnSync } = require('child_process')
const chai = require('chai')
const { assert } = require('chai')
chai.should()

// *************
// Write your tests here
describe('template-action', function () {
  this.timeout(60000)

  // ******* DO NOT REMOVE THIS TEST!
  describe('pre step', function () {
    before(async function () {
      rimraf.sync('node_modules')
      await runAction(['pre'])
    })
    it('should install the action dependencies', function () {
      assert(fs.existsSync('node_modules'), 'No node_modules found...')
    })
    after(function () {
      rimraf.sync('node_modules')
      spawnSync('npm', ['i'], { stdio: 'inherit' })
    })
  })
  // *******

  // ******* Example test
  describe('Placeholder test', function () {
    before(async function () {
      await runAction(steps)
    })
    it('should pass', function () {
      const exp = true
      assert(exp === true, 'This cannot fail!')
    })
  })
  // *******
})
// *************
