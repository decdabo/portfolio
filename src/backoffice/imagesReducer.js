import { picTypes } from "./types";

const initialState = {
  component: "",
  placeHolder: "",
  pic: undefined,
  home: undefined,
  about: undefined,
  skills: undefined,
  contact: undefined,
};

export const imagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case picTypes.home:
      return {
        ...state,
        home: payload["home"] ? payload["home"].imageURL : payload,
        pic: payload["home"] ? undefined : payload,
        component: "Home Background",
      };
    case picTypes.about:
      return {
        ...state,
        about: payload["about"] ? payload["about"].imageURL : payload,
        pic: payload["about"] ? undefined : payload,
        component: "About Background",
      };
    case picTypes.skills:
      return {
        ...state,
        skills: payload["skills"] ? payload["skills"].imageURL : payload,
        pic: payload["skills"] ? undefined : payload,
        component: "Skills Background",
      };
    case picTypes.contact:
      return {
        ...state,
        contact: payload["contact"] ? payload["contact"].imageURL : payload,
        pic: payload["contact"] ? undefined : payload,
        component: "Contact Background",
      };
    case picTypes.preview: 
      return {
        ...state,
        preview: payload
      }
    default:
      return state;
  }
};