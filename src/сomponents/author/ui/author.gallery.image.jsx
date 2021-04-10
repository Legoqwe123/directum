import { Image } from "rebass"

export const AuthorGalleryImage = ({ src, ...props }) => (
  <Image
    src={src}
    width={[150, 150, 165, 175, 150, 150, 150]}
    height={[150, 150, 165, 175, 150, 150, 150]}
    sx={{
      position: "relative",
      cursor: "pointer",
      transition: "transform ease .2s",
      ":hover": {
        transform: "scale(1.1)",
        zIndex: "999",
      },
    }}
    {...props}
  />
)
