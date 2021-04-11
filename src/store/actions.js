import { createUrlForFetch } from "../core/helpers"

const fetchPhotoRequested = () => ({
  type: "FETCH_PHOTO_REQUESTED",
})

const fetchPhotoSuccess = (photo) => ({
  type: "FETCH_PHOTO_SUCCESS",
  payload: photo,
})

const fetchPhotoFailure = () => ({
  type: "FETCH_PHOTO_FAILURE",
})

const fetchAuthorRequested = () => ({
  type: "FETCH_AUTHOR_REQUESTED",
})

const fetchAuthorSuccess = (photo) => ({
  type: "FETCH_AUTHOR_SUCCESS",
  payload: photo,
})

const fetchAuthorFailure = () => ({
  type: "FETCH_AUTHOR_FAILURE",
})

export const loadPhotosPagination = (start, end) => async (dispatch) => {
  try {
    dispatch(fetchPhotoRequested())

    const photoJSON = await fetch(
      createUrlForFetch(`photos?_start=${start}&_end=${end}`),
    )

    const photo = await photoJSON.json()

    dispatch(fetchPhotoSuccess(photo))
  } catch (error) {
    dispatch(fetchPhotoFailure(error))
  }
}

export const loadsPhotosByAlbumdId = (albumID) => async (dispatch) => {
  try {
    dispatch(fetchPhotoRequested())

    const photosJSON = await fetch(
      createUrlForFetch(`photos?albumId=${albumID}`),
    )

    const photos = await photosJSON.json()

    dispatch(fetchPhotoSuccess(photos))
  } catch (error) {
    dispatch(fetchPhotoFailure(error))
  }
}

export const loadAuthor = (albumID) => async (dispatch) => {
  try {
    dispatch(fetchAuthorRequested())

    const albumJSON = await fetch(createUrlForFetch(`albums?id=${albumID}`))
    const [album] = await albumJSON.json()

    const userId = album.userId
    const userJSON = await fetch(createUrlForFetch(`users?id=${userId}`))
    const [user] = await userJSON.json()

    const albumsJSON = await fetch(createUrlForFetch(`albums?userId=${userId}`))
    const albums = await albumsJSON.json()

    dispatch(
      fetchAuthorSuccess({
        author: user,
        albums,
      }),
    )
  } catch (error) {
    dispatch(fetchAuthorFailure(error))
  }
}
