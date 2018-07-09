const {lstatSync} = require('fs')
const {dirname} = require('path')
const autoRequire = require('./autoRequire')

function interpretOptions(arg1, ...args) {
  if (arguments.length < 1) {
    return [autoRequire(dirname(require.main.filename)), ...args]
  } else if (typeof arg1 == 'string' && arg1.length > 0) {
    try {
      if (!lstatSync(arg1).isDirectory()) throw new Error('Path is not a directory')
    } catch(error) {
      throw new Error('Invalid Path')
    }
    return [autoRequire(arg1), ...args]
  } else if (typeof arg1 == 'object') {
    return [arg1, ...args]
  } else {
    throw new Error('Invalid Configuration Option')
  }
}

module.exports = interpretOptions
