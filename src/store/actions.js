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

export const loadPhotos = (start, end) => async (dispatch) => {
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

export const loadAuthor = (albumID) => async (dispatch) => {
  try {
    dispatch(fetchAuthorRequested())

    const urls = [
      createUrlForFetch(`albums?id=${albumID}`),
      createUrlForFetch(`photos?albumId=${albumID}`),
    ]

    const [album, albums] = await Promise.all(
      urls.map(async (url) => await (await fetch(url)).json()),
    )

    const userId = album[0].userId
    const userJSON = await fetch(createUrlForFetch(`users?id=${userId}`))
    const [user] = await userJSON.json()

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
