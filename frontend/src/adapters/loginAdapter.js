import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api/v1/'

export default {
  loginUser: loginParams => {
    return axios.post('sessions', loginParams).then( userData => userData.data)
  }
}
