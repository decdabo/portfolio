import { types } from "./types/types";

const initialState = {
  show: false,
  error: true,
  msg: ''
}

export const alertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ALERT_SUCCESS:
      return {
        show: true,
        error: false,
        msg: payload
      }
    case types.ALERT_ERROR:
      return {
        show: true,
        error: true,
        msg: payload
      }
    default:
      return state;
  }
}