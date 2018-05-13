import Axios from 'axios'

let fetch = Axios.create({
  baseURL: 'http://bysj.cc',
  timeout: 1000
})

fetch.interceptors.request.use(request => {
  const token = localStorage.getItem('user_token')
  if (token) {
    request.headers['X-Token'] = token
  }
  return request
})

fetch.interceptors.response.use(response => {
  return response
})

export default fetch
