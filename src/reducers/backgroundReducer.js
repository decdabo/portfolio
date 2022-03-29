import { types } from "./types/types"

const initialState = {
  loading: true,
  images: {
    home: {
      cloudinaryId: '',
      imageURL: 'assets/screens/home.jpg'
    },
    about: {
      cloudinaryId: '',
      imageURL: 'assets/screens/about.jpg'
    },
    skills: {
      cloudinaryId: '',
      imageURL: 'assets/screens/skills.png'
    },
    contact: {
      cloudinaryId: '',
      imageURL: 'assets/screens/contact.png'
    },
  }
}

export const backgroundReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GOOD_LOAD_OFF:
      return {
        loading: payload.loading,
        images: payload.images
      }
    case types.BAD_LOAD_OFF: 
      return {
        loading: payload.loading,
        images: {
          ...initialState.images
        }
      }
    default:
      return state;
  }
}