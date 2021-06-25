import { combineReducers } from "redux"
import userData from "./userData"
import coursesReducer from "./coursesReducer"

const rootReducer = combineReducers({
    userData: userData,
    coursesReducer: coursesReducer
})

export default rootReducer;