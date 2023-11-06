const DEFAULT_OPTIONS = {
  addSleep: false,

  /** @type {boolean=} */
  externalOptions: false,

  /** @type {(false | string[])=} */
  externalVariables: false,

  /** @type {boolean=} */
  injectExecVariables: false,
}

const DEFAULT_CLI_OPTIONS = {
  ...DEFAULT_OPTIONS,
  output: 'loadtest.js',
}

const DEFAULT_FUNCTION_NAME = 'main'

module.exports = {
  DEFAULT_OPTIONS,
  DEFAULT_CLI_OPTIONS,
  DEFAULT_FUNCTION_NAME,
}
