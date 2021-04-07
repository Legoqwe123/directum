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

export const loadPhoto = (start, end) => async (dispatch) => {
  try {
    dispatch(fetchPhotoRequested())

    const photoJSON = await fetch(
      createUrlForFetch(`photos?_start=${start}&_end=${end}`),
    )

    const photo = await photoJSON.json()

    dispatch(fetchPhotoSuccess(photo))
  } catch {
    dispatch(fetchPhotoFailure())
  }
}
