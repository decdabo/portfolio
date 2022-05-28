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
          images: data.images ? data.images : data
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
      const errorAction = {
        type: types.ALERT_ERROR,
        payload: {
          msg: 'Error connecting with the server'
        }
      }

      dispatch(errorAction)
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
        const successAlertAction = {
          type: types.ALERT_SUCCESS,
          payload: 'The image has been upload!'
        }
        dispatch(successAlertAction)
        return dispatch(action);
      } else {
        return dispatch({
          type: types.ALERT_ERROR,
          payload: data.msg
        });
      }
    } catch (error) {
      return dispatch({
        type: types.ALERT_ERROR,
        payload: 'Error connecting with the server'
      });
    }
  }
}
