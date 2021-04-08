import React from "react"
import { useHistory } from "react-router"
import { Card, Image, Text, Flex, Button } from "rebass"

import { routes } from "core/routes"

export const PhotoListItem = ({ photo }) => {
  const history = useHistory()

  const handleClick = () =>
    history.push(`${routes.author}?albumId=${photo.albumId}`)

  return (
    <Card
      display="flex"
      p={2}
      alignItems={["center"]}
      flexDirection="column"
      mr={[0, 0, 0, 0, 0, 3]}
      mt={[3]}
      sx={{
        border: "2px solid",
        borderColor: "primary",
        borderRadius: "5px",
      }}
    >
      <Image
        src={photo.url}
        maxWidth={[200, 200, "100%", "100%", "100%", "100%"]}
        maxHeight="250px"
      />

      <Text
        fontSize={[1, 1, 2, 2, 2, 2]}
        maxWidth={[150, 150, 250, 250, 250, 250]}
        textAlign="center"
        mt={2}
        color="text"
      >
        {photo.title}
      </Text>

      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-end"
        flex="1 1 auto"
      >
        <Button
          fontSize={[1, 1, 2, 2, 2, 2]}
          mt={2}
          fontWeight="heading"
          color="text"
          onClick={handleClick}
          sx={{
            cursor: "pointer",
          }}
        >
          Author
        </Button>
      </Flex>
    </Card>
  )
}
