const root = require('./root')
const variableDefined = require('./variableDefined')
const { assay: makeAssay } = require('../make')

/**
 * Validate LI-HAR archive
 *
 * @return {undefined} If valid.
 * @throws {InvalidArchiveError} If invalid.
 */
function validate(archive, options) {
  root(archive, makeAssay())
  if (archive.log.entries) {
    variableDefined(archive, options)
  }
}

module.exports = validate
