'use strict'
const chalk = require('chalk')
const semver = require('semver')
const packageConfig = require('../package.json')
const shell = require('shelljs')

function exec (cmd) {
   //创建同步的子进程 cmd要运行的命令  返回一个stdout(标准输出流) 可以理解为命令行的输出结果
  return require('child_process').execSync(cmd).toString().trim()  
}

const versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),   //process.version当前node进程中的 node的版本号semver.clean("v8.11.1") =>8.11.1
    versionRequirement: packageConfig.engines.node    //packageConfig.engines.node package.json中的信息
  }
]
console.log(semver.clean(process.version))
if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  const warnings = []

  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]

    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {    //判断项目中的node 和 npm 的版本号是否符合要求
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

    console.log()
    process.exit(1)
  }
}