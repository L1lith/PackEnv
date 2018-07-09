const merge = require('webpack-merge')

const common = require("./webpack.common.js")
process.env.NODE_ENV = process.env.NODE_ENV || "development"
const environment = require(`./webpack.${process.env.NODE_ENV}.js`)


function packEnvironments(configurations) {
  const environment = process.env.NODE_ENV
  if (typeof environment !== 'string') throw new Error('Node Missing Environment')
  if (environment === 'common') throw new Error('Node Environment cannot be "common"')
  if (!configuration.hasOwnProperty(environment)) throw new Error(`No configuration for environment "${environment}"`)
  if (typeof configuration != 'object' || configuration !== null) throw new Error('Configuration type invalid')
  Object.entries(configuration).forEach(([key, value]) => {
    if (typeof value != 'object' || value === null) throw new Error(`Configuration option "${key}"`)
  })

  let outputConfiguration = {}

  if (configuration.hasOwnProperty('common')) {
    outputConfiguration = configuration.common
  }
  outputConfiguration = merge(outputConfiguration, configuration[environment])
  return outputConfiguration
}

module.exports = packEnvironments
