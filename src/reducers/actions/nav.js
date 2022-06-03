import { navTypes } from "../types/navtypes";

export const initialState = {
  window: false,
  line: false,
  display: false
}

export const navReducer = (state = initialState, type) => {
  switch (type) {
    case navTypes.setDisplay:
      return {
        ...state,
        display: !state.display
      }
    case navTypes.setLine:
      return {
        ...state,
        line: !state.line
      }      
    case navTypes.setWindow:
      return {
        ...state,
        window: !state.window
      }
    default:
      return initialState;
  }
}
