import React from "react"
import { Flex } from "rebass"

import { PhotoListItem } from "./photo.list.item"

export const PhotoList = ({ photos }) => (
  <Flex
    flexWrap="wrap"
    justifyContent={[
      "center",
      "center",
      "center",
      "space-between",
      "space-between",
      "center",
    ]}
    m="0 auto"
    px={[2]}
    maxWidth={[240, 240, 300, 600, 600, 1200, 1500]}
    sx={{
      position: "relative",
      zIndex: 999,
    }}
  >
    {photos.map((photo) => (
      <PhotoListItem key={photo.id} photo={photo} />
    ))}
  </Flex>
)
