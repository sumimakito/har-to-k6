const isNaturalNumber = require('is-natural-number')

/**
 *
 * @param {*} spec
 * @param {'entry' | 'group' | 'function'} [scope]
 * @returns
 */
function sleep(spec, scope) {
  const fallbacks = []

  switch (scope) {
    case 'entry': {
      fallbacks.push('__ENV.K6_EXTERNAL_ENTRY_SLEEP')
      break
    }
    case 'group': {
      fallbacks.push('__ENV.K6_EXTERNAL_GROUP_SLEEP')
      break
    }
  }

  if (isNaturalNumber(spec, { includeZero: true })) {
    const valueInSec = Number((spec / 1000).toPrecision(5))
    fallbacks.push(valueInSec)
  }

  return `sleep(${fallbacks.join(' || ')});`
}

module.exports = sleep
