const merge = require('webpack-merge')

function packEnvironments(configuration, options={}) {
  if (options === null) options = {}
  if (typeof options != 'object') throw new Error("Options Must Be an Object.")
  const {warnings=true} = options
  let environment = process.env.NODE_ENV
  if (typeof environment != 'string') {
    if (warnings === true) console.warn('Node Missing Environment, Assuming Development')
    environment = "development"
  }
  if (environment === 'common') throw new Error('Node Environment cannot be "common"')
  if (typeof configuration != 'object' || configuration === null) throw new Error('Configuration type invalid')
  const entries = Object.entries(configuration)

  entries.forEach(([key, value]) => {
    if (typeof value != 'object' || value === null) throw new Error(`Configuration option "${key}"`)
  })

  let outputConfiguration = {}

  if (configuration.hasOwnProperty('common')) {
    outputConfiguration = configuration.common
  }
  if (configuration.hasOwnProperty(environment)) {
    outputConfiguration = merge(outputConfiguration, configuration[environment])
  } else if (warnings === true) {
    console.warn('There is no configuration for your environment.')
  }
  return outputConfiguration
}

module.exports = packEnvironments
