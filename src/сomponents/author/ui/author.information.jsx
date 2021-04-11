import { useSelector } from "react-redux"
import { Box } from "rebass"

import { useToggle } from "hooks/use.toggle"

import { AuthorGallery } from "./author.gallery"
import { AuthoInformationAddress } from "./author.information.address"
import { AuthorInformationAlbums } from "./author.information.albums"
import { AuthorInformationCompany } from "./author.information.company"
import { AuthorInformationContact } from "./author.information.contact"

export const AuthorInformation = ({ address, info, company, albums }) => {
  const [isOpenModal, closeModal, openModal] = useToggle()

  const { photos, loading } = useSelector((state) => state.photo)

  return (
    <Box
      maxWidth={[300, 300, 500, 700, 1000, 1300, 1500]}
      mx="auto"
      mt={5}
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
    >
      <AuthorInformationContact info={info} />
      <AuthoInformationAddress address={address} />
      <AuthorInformationCompany company={company} />
      <AuthorInformationAlbums albums={albums} openModal={openModal} />
      {!loading && photos.length > 0 && openModal && (
        <AuthorGallery
          photos={photos}
          isOpenModal={isOpenModal}
          closeModal={closeModal}
        />
      )}
    </Box>
  )
}
