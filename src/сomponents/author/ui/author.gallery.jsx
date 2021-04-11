import { Box, Flex } from "rebass"

import { Modal } from "@components/ui/modal"

import { usePagination } from "hooks/use.pagingation"

import { AuthorGalleryImage } from "./author.gallery.image"

export const AuthorGallery = ({ isOpenModal, photos, closeModal }) => {
  const [currentIndex, , decrement, increment] = usePagination(
    0,
    1,
    photos.length - 1,
  )

  return (
    <Modal
      isOpen={isOpenModal}
      onClose={closeModal}
      containerProps={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box width={[300, 300, 500, 600, 600, 600, 600, 600]}>
        <Flex>
          <AuthorGalleryImage
            photo={photos[currentIndex]}
            increment={increment}
            decrement={decrement}
            limit={50}
            step={currentIndex}
          />
        </Flex>
      </Box>
    </Modal>
  )
}
