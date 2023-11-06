function options(result, options) {
  if (options.externalOptions) {
    return `export const options = __ENV.K6_EXTERNAL_OPTIONS_FILE && JSON.parse(open(__ENV.K6_EXTERNAL_OPTIONS_FILE));`
  }

  const obj = {
    ...result.options,
  }

  return `export const options = ${JSON.stringify(obj)};`
}

module.exports = options
