import React from "react"
import { Flex } from "rebass"

import { PhotoListItem } from "./photo.list.item"

export const PhotoList = ({ photos }) => (
  <Flex
    flexWrap="wrap"
    justifyContent="center"
    m="0 auto"
    px={[2]}
    maxWidth={[1500]}
  >
    {photos.map((photo) => (
      <PhotoListItem key={photo.id} photo={photo} />
    ))}
  </Flex>
)
