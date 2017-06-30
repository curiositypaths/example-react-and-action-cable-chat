import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api/v1/'

export default {
  loginUser: function (loginParams) {return axios.post('sessions', loginParams)}
}
