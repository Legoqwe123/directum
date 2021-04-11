import { Box, Heading, Flex, Text, Image } from "rebass"

import infoIcon from "images/information.png"

export const AuthorInformationCompany = ({ company }) => (
  <Box
    flex={[
      "0 1 100%",
      "0 1 100%",
      "0 1 100%",
      "0 1 100%",
      "0 1 100%",
      "0 1 48%",
      "0 1 48%",
    ]}
    mt={5}
  >
    <Flex alignItems="center">
      <Heading fontSize={3}>Company</Heading>
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
          "1 1 35%",
          "1 1 35%",
          "1 1 35%",
          "1 1 28%",
          "1 1 30%",
        ]}
      >
        <Heading color="grey" fontSize={2}>
          Name
        </Heading>
        <Text mt={1} color="text">
          {company.name}
        </Text>
      </Box>
      <Box
        mt={3}
        ml={[0, 0, 0, 3, 3, 3, 3]}
        flex={[
          "1 1 100%",
          "1 1 100%",
          "1 1 35%",
          "1 1 35%",
          "1 1 35%",
          "1 1 35%",
          "1 1 35%",
        ]}
      >
        <Heading color="grey" fontSize={2}>
          CatchPhrase
        </Heading>
        <Text mt={1} color="text">
          {company.catchPhrase}
        </Text>
      </Box>
      <Box
        mt={4}
        flex={[
          "1 1 100%",
          "1 1 100%",
          "1 1 35%",
          "1 1 35%",
          "1 1 35%",
          "1 1 40%",
          "1 1 40%",
        ]}
      >
        <Heading color="grey" fontSize={2}>
          Bs
        </Heading>
        <Text mt={1} color="text">
          {company.bs}
        </Text>
      </Box>
    </Flex>
  </Box>
)
