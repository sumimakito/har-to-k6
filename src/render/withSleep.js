const sleep = require('./sleep')

/**
 *
 * @param {*} flow
 * @param {*} spec
 * @param {'entry' | 'group'} [scope]
 * @returns
 */
function withSleep(flow, spec, scope) {
  const before = spec.filter(({ before }) => before).map(({ before }) => before)
  const after = spec.filter(({ after }) => after).map(({ after }) => after)

  return [
    ...before.map(s => sleep(s, scope)),
    ...flow,
    ...after.map(s => sleep(s, scope)),
  ].filter(flowItem => flowItem)
}

module.exports = withSleep
