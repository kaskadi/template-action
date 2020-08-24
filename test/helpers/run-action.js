const { spawnSync } = require('child_process')

module.exports = (steps) => {
  for (const step of steps) {
    runStep(step)
  }
}

function runStep (step) {
  console.log(`INFO: running action ${step} step...`)
  console.log(`\n************ ${step.toUpperCase()} STEP OUTPUT START ************\n`)
  const exec = spawnSync('node', [`src/${step}`])
  let { stdout, stderr } = exec
  stdout = stdout.toString()
  stderr = stderr.toString()
  if (stderr.length > 0) {
    console.log(`ERROR: an error occured in ${step} step...`)
    console.log(stderr)
    process.exit()
  } else {
    console.log(stdout)
  }
  console.log(`\n************ ${step.toUpperCase()} STEP ACTION OUTPUT END ************\n`)
}
