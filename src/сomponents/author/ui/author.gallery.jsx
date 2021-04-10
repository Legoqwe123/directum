import { useState } from "react"
import { Box, Heading, Flex, Image, Button, Text } from "rebass"

import { Modal } from "@components/ui/modal"

import { useToggle } from "hooks/use.toggle"
import { usePagination } from "hooks/use.pagingation"

import arrowLeft from "images/left-arrow.png"
import arrowRight from "images/right-arrow.png"

import { AuthorGalleryList } from "./author.gallery.list"

export const AuthorGallery = ({ albums }) => {
  const [isOpen, close, open] = useToggle()
  const [index, setIndex] = useState(0)

  const [currentIndex, , decrement, increment] = usePagination(
    index,
    1,
    albums.length - 1,
  )

  const handleOpenImage = (index) => {
    open()
    setIndex(index)
  }

  return (
    <Box flex="0 1 100%" mt={5}>
      <Flex alignItems="center">
        <Heading fontSize={3}>Gallery</Heading>
      </Flex>
      <Flex mt={3} flexWrap="wrap">
        <AuthorGalleryList images={albums} handleImage={handleOpenImage} />
      </Flex>

      <Modal
        isOpen={isOpen}
        onClose={close}
        containerProps={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {albums[currentIndex] && (
          <Flex
            display="flex"
            flexDirection="column"
            bg="white"
            sx={{
              borderRadius: "3px",
            }}
          >
            <Image
              src={albums[currentIndex].url}
              height={[300, 330, 500, 600, 600, 600, 600, 600]}
              width={[300, 330, 500, 600, 600, 600, 600, 600]}
            />
            <Flex justifyContent="space-between" alignItems="center">
              <Button
                bg="white"
                sx={{
                  cursor: "pointer",
                  outline: "none",
                }}
                onClick={increment}
              >
                <Image src={arrowLeft} width={30} />
              </Button>
              <Text fontWeight="heading">{`${currentIndex + 1}/${
                albums.length
              }`}</Text>
              <Button
                bg="white"
                sx={{
                  cursor: "pointer",
                  outline: "none",
                }}
                onClick={decrement}
              >
                <Image src={arrowRight} width={30} />
              </Button>
            </Flex>
          </Flex>
        )}
      </Modal>
    </Box>
  )
}
