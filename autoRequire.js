const {readdirSync} = require('fs')
const {join} = require('path')

const configurationRegex = /^webpack\.([^.]+)(?=\.js$)/

function autoRequire(directory) {
  const output = {}
  readdirSync(directory).forEach(file => {
    let optionName = (file.match(configurationRegex) || [])[1]
    if (typeof optionName != 'string' || optionName === 'config') return
    output[optionName] = require(join(directory, file))
  })
  return output
}

module.exports = autoRequire
