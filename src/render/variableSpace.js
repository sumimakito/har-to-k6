const { FlowItemType } = require('../enum')
const { UnrecognizedError } = require('../error')

function variableSpace(result, options) {
  if (options && Array.isArray(options.externalVariables)) {
    return `const vars = Object.create(externalVariables[exec.vu.idInTest - 1]) || {};`
  } else if (result.flow.find(variableFlowItem)) {
    if (options.injectExecVariables) {
      return `const vars = {
        __exec_vu_iterationInScenario: exec.vu.iterationInScenario,
        __exec_vu_idInTest: exec.vu.idInTest,
      };`
    }
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
