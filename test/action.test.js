/* eslint-env mocha */
const runAction = require('./helpers/run-action.js')
// const getGlobalDeps = require('./helpers/get-global-deps.js')
// const rimraf = require('rimraf')
const { spawnSync } = require('child_process')
const chai = require('chai')
const { assert } = require('chai')
chai.should()

const pjson = require('../package.json')
const pkgDependencies = Object.keys(pjson.dependencies || {})

// *************
// Write your tests here
describe('template-action', function () {
  this.timeout(60000)

  // ******* DO NOT REMOVE THIS TEST!
  describe('pre step', function () {
    beforeEach(function () {
      for (const pkgDep of pkgDependencies) {
        spawnSync('npm', ['rm', pkgDep], { stdio: 'inherit' })
      }
    })
    it('should install the action dependencies when ran from action folder', async function () {
      await runAction(['pre'])
      const dependencies = pkgDependencies.map(key => require(key))
      assert(dependencies.filter(dep => dep).length === dependencies.length, 'Dependencies not properly installed...')
    })
    it('should install the action dependencies when ran from another folder', async function () {
      process.chdir('test')
      await runAction(['pre'])
      process.chdir('..')
      const dependencies = pkgDependencies.map(key => require(key))
      assert(dependencies.filter(dep => dep).length === dependencies.length, 'Dependencies not properly installed...')
    })
    afterEach(function () {
      spawnSync('npm', ['i'], { stdio: 'inherit' })
    })
  })
  // *******

  // ******* Example test
  describe('Placeholder test', function () {
    before(async function () {
      await runAction(['pre', 'main', 'post'])
    })
    it('should pass', function () {
      const exp = true
      assert(exp === true, 'This cannot fail!')
    })
  })
  // *******
})
// *************
