import { useSelector } from "react-redux"
import { Box, Button, Image } from "rebass"

import arrowLeft from "images/left-arrow.png"
import arrowRight from "images/right-arrow.png"

export const PhotoButtons = ({ step, handleNext, handlePrevious }) => {
  const loading = useSelector((state) => state.photo.loading)

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="100%"
      width="100%"
      p={2}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Button
        disabled={loading || step <= 0}
        backgroundColor="white"
        onClick={handlePrevious}
        p={2}
        sx={{
          cursor: "pointer",
          ":disabled": {
            opacity: 0.5,
          },
        }}
      >
        <Image src={arrowLeft} width={30} />
      </Button>
      <Button
        disabled={loading}
        backgroundColor="#fff"
        onClick={handleNext}
        p={2}
        sx={{
          cursor: "pointer",
          ":disabled": {
            opacity: 0.5,
          },
        }}
      >
        <Image src={arrowRight} width={30} />
      </Button>
    </Box>
  )
}
