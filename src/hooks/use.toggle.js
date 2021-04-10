import { useState } from "react"

export const useToggle = () => {
  const [state, setState] = useState(false)

  const toggle = () => {
    setState(!state)
  }

  const close = () => {
    setState(false)
  }

  const open = () => {
    setState(true)
  }

  return [state, close, open, toggle]
}
