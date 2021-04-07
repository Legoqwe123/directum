import React from "react"
import { Card, Image, Text, Link, Flex } from "rebass"

export const PhotoListItem = ({ photo }) => {
  return (
    <Card
      display="flex"
      alignItems="center"
      flexDirection="column"
      mr={[3]}
      mt={[3]}
    >
      <Image src={photo.url} maxWidth="250px" maxHeight="250px" />

      <Text maxWidth={250} textAlign="center" mt={2}>
        {photo.title}
      </Text>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-end"
        flex="1 1 auto"
      >
        <Link variant="nav" href="https://rebassjs.org">
          Link
        </Link>
      </Flex>
    </Card>
  )
}
