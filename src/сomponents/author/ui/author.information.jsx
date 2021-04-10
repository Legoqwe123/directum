import { Box } from "rebass"

import { AuthoInformationAddress } from "./author.information.address"
import { AuthorInformationCompany } from "./author.information.company"
import { AuthorInformationContact } from "./author.information.contact"
import { AuthorGallery } from "./author.gallery"

export const AuthorInformation = ({ address, info, company, albums }) => {
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
      <AuthorGallery albums={albums} />
    </Box>
  )
}
