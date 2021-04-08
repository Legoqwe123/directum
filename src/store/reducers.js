const initialStatePhoto = {
  photos: [],
  loading: false,
  error: false,
}

const initialStateAuthor = {
  author: {},
  albums: [],
  loading: false,
  error: false,
}

export const reducerPhoto = (initialState = initialStatePhoto, action) => {
  switch (action.type) {
    case "FETCH_PHOTO_REQUESTED":
      return {
        ...initialState,
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
        error: action.payload,
      }

    default:
      return initialState
  }
}

export const reducerAuthor = (initialState = initialStateAuthor, action) => {
  switch (action.type) {
    case "FETCH_AUTHOR_REQUESTED":
      return {
        ...initialState,
        loading: true,
      }

    case "FETCH_AUTHOR_SUCCESS": {
      const { author, albums } = action.payload

      return {
        author,
        albums,
        loading: false,
        error: false,
      }
    }

    case "FETCH_AUTHOR_FAILURE":
      return {
        author: {},
        albums: [],
        loading: false,
        error: action.payload,
      }

    default:
      return initialState
  }
}
