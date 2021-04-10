import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { loadPhotos } from "@actions"

import { usePagination } from "hooks/use.pagingation"

import { PhotoView } from "./ui/photo.view"

const PAGINATION_STEP = 20

export const Photo = () => {
  const dispatch = useDispatch()

  const [start, end, handleNext, handlePrevious] = usePagination(
    0,
    PAGINATION_STEP,
    5000,
  )

  useEffect(() => {
    dispatch(loadPhotos(start, end))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start])

  return (
    <PhotoView
      handleNext={handleNext}
      handlePrevious={handlePrevious}
      step={start}
    />
  )
}
