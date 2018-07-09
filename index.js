const packEnvironments = require('./packEnvironments')
const interpretOptions = require('./interpretOptions')

module.exports = (...args) => packEnvironments(...interpretOptions(...args))
