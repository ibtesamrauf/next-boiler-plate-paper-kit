import * as t from "../types";

const defaultState = {
    courses: [],
};

// export default function (state = defaultState, action = {}) {
const coursesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case t.GET_COURSES:
            return {
                ...state,
                courses: state.courses,
            };
        
        default:
            return state;
    }
}

export default coursesReducer;
