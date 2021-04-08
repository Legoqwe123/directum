import { useState } from "react"

export const usePagination = (start, step) => {
  const [counter, setCounter] = useState(start)

  const nextStep = () => setCounter((previousState) => previousState + step)

  const previousStep = () =>
    setCounter((previousState) =>
      previousState - step < 0 ? 0 : previousState - step,
    )

  return [counter, counter + step, nextStep, previousStep]
}
