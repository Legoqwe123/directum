import { Box, Heading, Flex, Text, Image } from "rebass"

import infoIcon from "images/information.png"

export const AuthorInformationContact = ({ info }) => (
  <Box flex="0 1 100%">
    <Flex alignItems="center">
      <Heading fontSize={3}>Contact</Heading>
      <Image src={infoIcon} height={25} width={25} ml={2} color="grey" />
    </Flex>
    <Flex
      p={3}
      mt={3}
      sx={{
        boxShadow: "large",
        borderRadius: "10px",
      }}
      flexWrap="wrap"
      justifyContent="space-between"
    >
      <Box
        mt={3}
        flex={[
          "1 1 100%",
          "1 1 100%",
          "1 1 50%",
          "1 1 20%",
          "1 1 20%",
          "1 1 20%",
          "1 1 20%",
        ]}
      >
        <Heading color="grey" fontSize={2}>
          Name
        </Heading>
        <Text mt={1} color="text">
          {info.name}
        </Text>
      </Box>
      <Box
        mt={3}
        ml={[0, 0, 0, 3, 3, 3, 3]}
        flex={[
          "1 1 100%",
          "1 1 100%",
          "1 1 50%",
          "1 1 20%",
          "1 1 20%",
          "1 1 20%",
          "1 1 20%",
        ]}
      >
        <Heading color="grey" fontSize={2}>
          Email
        </Heading>
        <Text mt={1} color="text">
          {info.email}
        </Text>
      </Box>
      <Box
        mt={4}
        flex={[
          "1 1 100%",
          "1 1 100%",
          "1 1 50%",
          "1 1 20%",
          "1 1 20%",
          "1 1 20%",
          "1 1 20%",
        ]}
      >
        <Heading color="grey" fontSize={2}>
          Username
        </Heading>
        <Text mt={1} color="text">
          {info.username}
        </Text>
      </Box>
      <Box
        mt={4}
        flex={[
          "1 1 100%",
          "1 1 100%",
          "1 1 50%",
          "1 1 20%",
          "1 1 20%",
          "1 1 20%",
          "1 1 20%",
        ]}
      >
        <Heading color="grey" fontSize={2}>
          Phone
        </Heading>
        <Text mt={1} color="text">
          {info.phone}
        </Text>
      </Box>
      <Box
        mt={4}
        flex={[
          "1 1 100%",
          "1 1 100%",
          "1 1 50%",
          "1 1 20%",
          "1 1 20%",
          "1 1 20%",
          "1 1 20%",
        ]}
      >
        <Heading color="grey" fontSize={2}>
          Website
        </Heading>
        <Text color="text" mt={1}>
          {info.website}
        </Text>
      </Box>
    </Flex>
  </Box>
)
