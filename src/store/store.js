import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"

import { reducerPhoto } from "./reducers"

export const store = createStore(reducerPhoto, applyMiddleware(thunkMiddleware))
