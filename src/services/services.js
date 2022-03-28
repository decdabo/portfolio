import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const imagesEndpoint = `${baseURL}images`;
const authEndpoint = `${baseURL}auth/`

export const getImages = async ( email ) => {
  const URL = email ? `${imagesEndpoint}/${email}` : imagesEndpoint
  try {
    return await axios.get(URL)
  } catch (error) {
    console.log(error)
  }
}

export const authPetition = async (endpoint, formData) => {
  const URL = `${authEndpoint}${endpoint}`
  try {
    return await axios.post(URL, formData)
  } catch (error) {
    console.log(error)
  }
}

export const uploadImage = async(endpoint, formData) => {
  const URL = `${imagesEndpoint}${endpoint}`
  try {
    return await axios.post(URL, formData)
  } catch (error) {
    console.log(error)
  }
}
