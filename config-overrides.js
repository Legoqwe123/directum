const path = require("path")
const { alias } = require("react-app-rewire-alias")

const aliasMap = {
  "@ui": path.join(__dirname, "src", "ui"),
  "@components": path.join(__dirname, "src", "components"),
}

module.exports = alias(aliasMap)
