import {
    SET_SIDEBAR
  } from "../actions/types";
  

const initialState = { show: 'responsive' };

export default function sidebar_reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_SIDEBAR:
        return {
            ...state,
            show: payload.show,
        };

        default:
        return state;
    }
}