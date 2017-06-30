import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api/v1/'

export default {
  loginUser: roomParams => {
    return axios.post('rooms', roomParams).then( roomData => roomData.data)
  }
}
