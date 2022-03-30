import { authPetition } from "../../services/services"
import { types } from "../types/types"

export const login = (formData, endpoint = 'register') => {
  return async (dispatch) => {
    try {
      const { data } = await authPetition(endpoint, formData);
      if (data.status === true) {
        const action = {
          type: types.LOG_IN,
          payload: {
            logged: true,
            email: data.email,
            name: data.name,
            access: data.access
          }
        }
        const successAction = {
          type: types.ALERT_SUCCESS,
          payload: data.msg
        }
        localStorage.setItem('user', JSON.stringify({ email: data.email, name: data.name }))
        dispatch(successAction)
        return dispatch(action)
      } else {
        const errorAction = {
          type: types.ALERT_ERROR,
          payload: data.msg
        }

        return dispatch(errorAction)
      }
    } catch (error) {
      dispatch({
        type: types.LOG_OUT
      })
      dispatch({
        type: types.ALERT_ERROR,
        payload: 'Issues on the services'
      })
    }
  }  
}

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("user");

    const action = {
      type: types.LOG_OUT,
      payload: false
    };
    const successLogoutAction = {
      type: types.ALERT_SUCCESS,
      payload: 'Succesfully logout!'
    }
    
    dispatch(successLogoutAction)
    return dispatch(action);
  }
}
