import { getImages, uploadImage } from "../../services/services";
import { types } from "../types/types";

export const setLoadOff = ( email ) => {
  return async (dispatch) => {
    try {
      const { data: { data } } = await getImages(email)
      const action = {
        type: types.GOOD_LOAD_OFF,
        payload: {
          loading: false,
          images: data.images
        }
      }

      return dispatch(action);
    } catch (error) {
      const action = {
        type: types.BAD_LOAD_OFF,
        payload: {
          loading: false
        }
      }
      console.log(error)
      return dispatch(action)
    }
  }
}


export const uploadNewBackground = (endpoint, formData) => {
  return async (dispatch) => {
    try {
      const { data } = await uploadImage(endpoint, formData);
      if (data.ok === true) {
        const action = {
          type: types.GOOD_LOAD_OFF,
          payload: {
            loading: false,
            images: data.data?.images
          }
        }

        dispatch(action);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error)
    }
  }
}