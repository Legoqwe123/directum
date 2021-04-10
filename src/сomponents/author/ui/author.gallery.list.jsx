import { Fragment } from "react"

import { AuthorGalleryImage } from "./author.gallery.image"

export const AuthorGalleryList = ({ images, handleImage }) => (
  <Fragment>
    {images.map((image, index) => (
      <AuthorGalleryImage
        key={image.id}
        src={image.thumbnailUrl}
        onClick={() => handleImage(index)}
      />
    ))}
  </Fragment>
)
