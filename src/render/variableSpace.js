const { FlowItemType } = require('../enum')
const { UnrecognizedError } = require('../error')

function variableSpace(result, options) {
  if (options && Array.isArray(options.externalVariables)) {
    return `const vars = externalVariables[exec.vu.idInTest] || {};`
  } else if (result.flow.find(variableFlowItem)) {
    return `const vars = {};`
  } else {
    return null
  }
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
