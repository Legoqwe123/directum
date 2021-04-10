import { Fragment } from "react"
import { useSelector } from "react-redux"

import { PhotoList } from "./photo.list"
import { PhotoButtons } from "./photo.buttons"

import { WithLoading } from "ui/with.loading"

export const PhotoView = (props) => {
  const { photos, loading } = useSelector((state) => state.photo)

  return (
    <Fragment>
      <WithLoading
        loading={loading}
        boxProps={{
          position: "relative",
          alingItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
        component={() => <PhotoList photos={photos} />}
      />

      <PhotoButtons {...props} />
    </Fragment>
  )
}
