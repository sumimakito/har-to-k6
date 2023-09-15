function externalVariables(options) {
  if (options && Array.isArray(options.externalVariables)) {
    return `const externalVariables = new SharedArray('externalVariables', () => JSON.parse(open(__ENV.EXTERNAL_DATA_FILE)))`
  }

  return null
}

module.exports = externalVariables
