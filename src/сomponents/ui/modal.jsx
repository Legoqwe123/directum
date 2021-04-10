import { useEffect } from "react"
import ReactDOM from "react-dom"
import { Box } from "rebass"

export const Modal = ({ isOpen, onClose, containerProps, children }) => {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto")
  }, [isOpen])

  return ReactDOM.createPortal(
    isOpen && (
      <Box
        onClick={(event) => {
          if (event.target.parentElement.classList.contains("modal-root")) {
            onClose()
          }
        }}
        className="modal-root"
        backgroundColor={"rgba(1, 1 , 1 , 0.5)"}
        height="100%"
        width="100%"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: "9999",
        }}
      >
        <Box className="modal-container" height="inherit" {...containerProps}>
          {children}
        </Box>
      </Box>
    ),
    document.body,
  )
}
