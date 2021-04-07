const initialStatePhoto = {
  photos: [],
  loading: false,
  error: false,
}

export const reducerPhoto = (initialState = initialStatePhoto, action) => {
  switch (action.type) {
    case "FETCH_PHOTO_REQUESTED":
      return {
        ...initialStatePhoto,
        loading: true,
      }

    case "FETCH_PHOTO_SUCCESS":
      return {
        photos: action.payload,
        loading: false,
        error: false,
      }

    case "FETCH_PHOTO_FAILURE":
      return {
        photos: [],
        loading: false,
        error: true,
      }

    default:
      return initialState
  }
}
