import { createStore, applyMiddleware, combineReducers } from "redux"
import thunkMiddleware from "redux-thunk"

import { reducerPhoto, reducerAuthor } from "./reducers"

export const store = createStore(
  combineReducers({ photo: reducerPhoto, author: reducerAuthor }),
  applyMiddleware(thunkMiddleware),
)
