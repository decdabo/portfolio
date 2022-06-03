import { picTypes } from "./types";

export const initialState = {
  component: "",
  placeHolder: "",
  pic: undefined,
  home: undefined,
  about: undefined,
  skills: undefined,
  contact: undefined,
};

export const imagesReducer = (state = initialState , { type, payload }) => {
  switch (type) {
    case picTypes.home:
      return {
        ...state,
        home: payload?.home ? state.home : payload,
        pic: state.home,
        placeHolder: payload?.home ? payload.home.imageURL : payload,
        component: "Home Background",
      };
    case picTypes.about:
      return {
        ...state,
        about: payload?.about ? state.about : payload,
        pic: state.about,
        placeHolder: payload?.about ? payload.about.imageURL : payload,
        component: "About Background",
      };
    case picTypes.skills:
      return {
        ...state,
        skills: payload?.skills ? state.skills : payload,
        pic: state.skills,
        placeHolder: payload?.skills ? payload.skills.imageURL : payload,
        component: "Skills Background",
      };
    case picTypes.contact:
      return {
        ...state,
        contact: payload?.contact ? state.contact : payload,
        pic: state.contact,
        placeHolder: payload?.contact ? payload.contact.imageURL : payload,
        component: "Contact Background",
      };
    case picTypes.preview: 
      return {
        ...state,
        preview: payload
      }
    case state.home:
      return {
        ...state,
        home: undefined,
        preview: undefined
      };
    case state.about:
      return {
        ...state,
        about: undefined,
        preview: undefined
      };
    case state.skills:
      return {
        ...state,
        skills: undefined,
        preview: undefined
      };
    case state.contact:
      return {
        ...state,
        contact: undefined,
        preview: undefined
      };
    default:
      return state;
  }
};