import { types } from "./types/types";

const functionInitialState = () => {
  const verify = JSON.parse(localStorage.getItem("user"))
  if (verify) {
    try {
      return {
        logged: true,
        email: verify.email,
        name: verify.name,
        access: verify.access
      }
    } catch (error) {
      console.log(error)
    }
  } else {
    return ({ 
      logged: false,
      email: '',
      name: '',
      access: false
    })
  } 
}

const initialState = functionInitialState();

export const authReducer = ( state = initialState, { type, payload } ) =>{
  switch (type) {
    case types.LOG_IN:
      return payload
    case types.LOG_OUT:
      return {
        logged: false,
        email: '',
        name: '',
        access: false
      }
    default:
      return state;
  }
}