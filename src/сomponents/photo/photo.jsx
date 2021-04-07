import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { loadPhoto } from "@actions"

import { WithLoading } from "ui/with.loading"

import { PhotoView } from "./ui/photo.view"

export const Photo = () => {
  const dispatch = useDispatch()
  const { loading, photos } = useSelector((state) => state)

  useEffect(() => {
    dispatch(loadPhoto(0, 20))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <WithLoading
      loading={loading}
      boxProps={{
        alingItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
      component={() => <PhotoView photos={photos} />}
    />
  )
}
