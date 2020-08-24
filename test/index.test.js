/* eslint-env mocha */
const { spawnSync } = require('child_process')
const chai = require('chai')
chai.should()

// *************
// Write your tests here
describe('template-action', function () {
  // this.timeout(10000)
  // uncomment this if you want to raise the timeout cap for your whole test (when you need to perform long async tasks). You can also follow the same logic per describe block or per it block to increase the timeout cap
  // if your describe/it callbacks are arrow functions, you need to use the following syntax: describe('...', () => {}).timeout(...) but be aware that this won't apply to hooks!
  before(function () {
    runAction()
  })
})
// *************

// function to execute the main script of this action
function runAction () {
  try {
    console.log('INFO: running action...')
    spawnSync('node', ['src/pre'], { stdio: 'inherit' })
    spawnSync('node', ['src/main'], { stdio: 'inherit' })
    spawnSync('node', ['src/post'], { stdio: 'inherit' })
  } catch (err) {
    console.log('ERROR: an error occured...')
    console.log(err)
    process.exit()
  }
}

// just add any helpers you may need
