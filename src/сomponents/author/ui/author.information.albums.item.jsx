import { useDispatch } from "react-redux"
import { Text, Button } from "rebass"

import { loadPhotosByAlbumdId } from "@actions"

export const AuthorInformationAlbumsItem = ({ album, openModal }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(loadPhotosByAlbumdId(album.id))
    openModal()
  }

  return (
    <Button
      p={3}
      backgroundColor="white"
      mr={3}
      mt={3}
      maxHeight={90}
      onClick={handleClick}
      flex={[
        "1 1 auto",
        "1 1 auto",
        "1 1 47%",
        "1 1 auto",
        "1 1 auto",
        "1 1 auto",
        "1 1 auto",
      ]}
      sx={{
        boxShadow: "large",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      <Text color="text">{album.title}</Text>
    </Button>
  )
}
