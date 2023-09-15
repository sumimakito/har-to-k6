const prettify = require('./prettify')
const root = require('./root')

function render(result, imports, options) {
  const raw = root(result, imports, options)
  return prettify(raw)
}

module.exports = render
