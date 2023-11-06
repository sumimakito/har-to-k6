const { FlowItemType } = require('../enum')
const { UnrecognizedError } = require('../error')

function variableSpace(result, options) {
  const spread = []

  if (options) {
    if (Array.isArray(options.externalVariables)) {
      spread.push('externalVariables[exec.vu.idInTest - 1]')
    }

    if (options.injectExecVariables) {
      const pairs = []
      pairs.push('__vuIteration: exec.vu.iterationInScenario')
      pairs.push('__vuId: exec.vu.idInTest')
      spread.push(`{ ${pairs.join(', ')} }`)
    }
  }

  if (result.flow.find(variableFlowItem)) {
    spread.unshift('{}')
  }

  if (spread.length === 0) {
    return null
  }

  return `const vars = Object.assign(${spread.join(', ')});`
}

function variableFlowItem(item) {
  switch (item.type) {
    case FlowItemType.External:
      return variableEntry(item.entry)
    case FlowItemType.Group:
      return item.entries.find(variableEntry)
    default:
      throw new UnrecognizedError(
        { name: 'UnrecognizedFlowItemType' },
        `Unrecognized flow item type: ${item.type}`
      )
  }
}

function variableEntry(entry) {
  return entry.variables.size
}

module.exports = variableSpace
