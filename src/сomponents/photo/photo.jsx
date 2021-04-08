import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { loadPhotos } from "@actions"

import { usePagination } from "hooks/use.pagingation"

import { PhotoView } from "./ui/photo.view"

const PAGINATION_STEP = 20

export const Photo = () => {
  const dispatch = useDispatch()
  const { photos, loading } = useSelector((state) => state.photo)

  const [start, end, handleNext, handlePrevious] = usePagination(
    0,
    PAGINATION_STEP,
  )

  useEffect(() => {
    dispatch(loadPhotos(start, end))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start])

  return (
    <PhotoView
      photos={photos}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
      loading={loading}
      step={start}
    />
  )
}
