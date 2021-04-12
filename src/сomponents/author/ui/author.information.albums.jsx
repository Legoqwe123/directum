import React from "react"
import { Box, Heading, Image, Flex } from "rebass"

import { AuthorInformaitonAlbumsList } from "./author.informaiton.albums.list"

import infoIcon from "images/information.png"

export const AuthorInformationAlbums = ({ albums, openModal }) => (
  <Box mt={5} flex = "1 1 100%">
    <Flex>
      <Heading fontSize={3}>Albums</Heading>
      <Image src={infoIcon} height={25} width={25} ml={2} color="grey" />
    </Flex>
    <AuthorInformaitonAlbumsList albums={albums} openModal={openModal} />
  </Box>
)
