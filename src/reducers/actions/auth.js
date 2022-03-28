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
        localStorage.setItem('user', JSON.stringify({ email: data.email, name: data.name }))

        return dispatch(action)
      } else {
        // const action = {
        //   type: types.SET_ERROR,
        //   payload: data.msg
        // }

        // return dispatch(action)
        console.log(data)
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: types.LOG_OUT
      })
      dispatch({
        type: types.SET_ERROR,
        payload: 'Issues on the services'
      })
    }
  }  
}

export const logout = () => {
  return (dispatch) => {
    const action = {
      type: types.LOG_OUT,
      payload: false
    };
    localStorage.removeItem("user");
  
    return dispatch(action);
  }
}
