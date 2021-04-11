import React from "react"
import { Flex } from "rebass"

import { AuthorInformationAlbumsItem } from "./author.information.albums.item"

export const AuthorInformaitonAlbumsList = ({ albums, openModal }) => (
  <Flex flexWrap="wrap" mt={4}>
    {albums.map((album) => (
      <AuthorInformationAlbumsItem
        key={album.id}
        album={album}
        openModal={openModal}
      />
    ))}
  </Flex>
)
