import { Flex, Image, Button, Text } from "rebass"

import arrowLeft from "images/left-arrow.png"
import arrowRight from "images/right-arrow.png"

export const AuthorGalleryImage = ({
  photo,
  step,
  limit,
  decrement,
  increment,
}) => (
  <Flex
    display="flex"
    flexDirection="column"
    bg="white"
    sx={{
      borderRadius: "3px",
    }}
  >
    <Image
      src={photo.url}
      height={[300, 300, 500, 600, 600, 600, 600, 600]}
      width={[300, 300, 500, 600, 600, 600, 600, 600]}
    />
    <Flex justifyContent="space-between" alignItems="center">
      <Button
        bg="white"
        sx={{
          cursor: "pointer",
          outline: "none",
        }}
        onClick={increment}
      >
        <Image src={arrowLeft} width={30} />
      </Button>
      <Text fontWeight="heading">{`${step + 1}/${limit}`}</Text>
      <Button
        bg="white"
        sx={{
          cursor: "pointer",
          outline: "none",
        }}
        onClick={decrement}
      >
        <Image src={arrowRight} width={30} />
      </Button>
    </Flex>
  </Flex>
)
