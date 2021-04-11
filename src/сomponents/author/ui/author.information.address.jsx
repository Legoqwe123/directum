import { Box, Heading, Flex, Text, Image } from "rebass"

import infoIcon from "images/information.png"

export const AuthoInformationAddress = ({ address }) => (
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
      <Heading fontSize={3}>Address</Heading>
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
          "1 1 30%",
          "1 1 30%",
        ]}
      >
        <Heading color="grey" fontSize={2}>
          Street
        </Heading>
        <Text mt={1} color="text">
          {address.street}
        </Text>
      </Box>
      <Box
        mt={3}
        ml={[0, 0, 0, 3, 3, 3, 3]}
        flex={[
          "1 1 20%",
          "1 1 20%",
          "1 1 50%",
          "1 1 20%",
          "1 1 20%",
          "1 1 35%",
          "1 1 35%",
        ]}
      >
        <Heading color="grey" fontSize={2}>
          City
        </Heading>
        <Text mt={1} color="text">
          {address.city}
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
          "1 1 30%",
          "1 1 30%",
        ]}
      >
        <Heading color="grey" fontSize={2}>
          Suite
        </Heading>
        <Text mt={1}>{address.suite}</Text>
      </Box>
      <Box
        mt={4}
        flex={[
          "1 1 100%",
          "1 1 100%",
          "1 1 50%",
          "1 1 20%",
          "1 1 20%",
          "1 1 30%",
          "1 1 30%",
        ]}
      >
        <Heading color="grey" fontSize={2}>
          Code
        </Heading>
        <Text mt={1} color="text">
          {address.zipcode}
        </Text>
      </Box>
    </Flex>
  </Box>
)
