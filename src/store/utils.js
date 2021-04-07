export const makeActionCreator = (type, ...argumentNames) => {
  return (...parameters) => {
    const action = { type }
    argumentNames.forEach((argument) => {
      action[argument] = parameters[index]
    })

    return action
  }
}
