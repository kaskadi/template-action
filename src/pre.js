const { spawnSync } = require('child_process')
const path = require('path')

function main () {
  const actionRepo = path.join(__dirname, '..')
  const callingRepo = process.cwd()
  if (callingRepo !== actionRepo) {
    process.chdir(actionRepo)
    installDependencies()
    process.chdir(callingRepo)
  } else {
    installDependencies()
  }
}

function installDependencies () {
  console.log('INFO: installing action dependencies...')
  console.log('************ NPM ouput ************')
  spawnSync('npm', ['i', '--only=prod'], { stdio: 'inherit' })
  console.log('************ End of NPM ouput ************')
  console.log('SUCCESS: dependencies installed!')
}

main()
