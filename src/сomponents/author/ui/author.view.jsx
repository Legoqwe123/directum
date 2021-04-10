import { Fragment } from "react"
import { useSelector } from "react-redux"
import { Box } from "rebass"
import omit from "lodash/omit"
import isEmpty from "lodash/isEmpty"

import { AuthorProfile } from "./author.profile"
import { AuthorInformation } from "./author.information"

export const AuthorView = () => {
  const { address, info, company, albums } = useSelector(({ author }) => {
    const user = author.author
    const albums = author.albums

    const { company, address, ...props } = user
    const info = omit(props, "id")

    return { address, company, info, albums }
  })

  return (
    <Box>
      {[address, info, company, albums].every((data) => !isEmpty(data)) && (
        <Fragment>
          <AuthorProfile />
          <AuthorInformation
            address={address}
            info={info}
            company={company}
            albums={albums}
          />
        </Fragment>
      )}
    </Box>
  )
}
