import { Flex, Image, Heading } from "rebass"

import profile from "images/user.png"

export const AuthorProfile = () => (
  <Flex
    justifyContent="center"
    flexDirection="column"
    alignItems="center"
    mt={3}
  >
    <Image src={profile} width={70} height={70} />
    <Heading mt={3}>Profile</Heading>
  </Flex>
)
