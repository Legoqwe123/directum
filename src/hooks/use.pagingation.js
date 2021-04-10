import { useState, useEffect } from "react"

export const usePagination = (start, step, limit) => {
  const [counter, setCounter] = useState(start)

  useEffect(() => {
    setCounter(start)
  }, [start])

  const nextStep = () =>
    setCounter((previousState) =>
      limit && previousState >= limit ? previousState : previousState + step,
    )

  const previousStep = () =>
    setCounter((previousState) =>
      previousState - step < 0 ? 0 : previousState - step,
    )

  return [counter, counter + step, nextStep, previousStep]
}
