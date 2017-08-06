// app modules
import * as types from '../actions/actionTypes';

import initialState from './initialState';

// don't use `state.push` --> mutable
// ...state, object.assign --> immutable
// They never mutate, returning newly built objects: 
// This allows reasoning about input + output without side-effects
export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        case types.CREATE_COURSES_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        case types.UPDATE_COURSES_SUCCESS:
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];
        default:
            return state;
    }
}
