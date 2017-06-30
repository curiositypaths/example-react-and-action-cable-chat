import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api/v1/'
axios.defaults.headers.common["AUTHORIZATION"] = sessionStorage.getItem('jwt')

export default {
  create: roomParams => {
    return axios.post('rooms', roomParams).then( roomData => roomData.data)
  }
}
