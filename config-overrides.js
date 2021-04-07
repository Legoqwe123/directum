const path = require("path")
const { alias } = require("react-app-rewire-alias")

const aliasMap = {
  "@components": "./src/сomponents",
  "@pages": path.join("src", "pages"),
  "@actions": path.join("src", "store", "actions"),
}

module.exports = alias(aliasMap)
