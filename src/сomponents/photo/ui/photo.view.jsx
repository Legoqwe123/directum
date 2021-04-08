import { Fragment } from "react"

import { PhotoList } from "./photo.list"
import { PhotoButtons } from "./photo.buttons"

import { WithLoading } from "ui/with.loading"

export const PhotoView = ({ photos, loading, ...props }) => {
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
