import store from '@store/store'
import axios from 'axios'

const client = axios.create({
  //baseURL: `${Config.BASE_URL}/api`,
  baseURL: 'http://192.168.1.23:3000/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

const onSuccess = function (response: any) {
  //
  return response.data
}

const onError = function (error: any) {
  //   console.error('Request Failed:', error.config);
  if (error.response) {
    // Request was made but server responded with something
    // other than 2xx
    // console.error('Status:', error.response.status);
    // console.error('Data:', error.response.data);
    // console.error('Headers:', error.response.headers);
  }
  return Promise.reject({
    errMsg: !error?.response ? 'Network Issue!' : error?.response?.data,
    status: error?.response?.status || 'not status',
  })
}

client.interceptors.response.use(onSuccess, onError)

client.interceptors.request.use(
  async (config) => {
    const state = store.getState()
    console.log('state', state)

    const token = state.auth.userToken
    console.log('userTokenClient', token)

    config.headers['x-auth-token'] = `${token}`
    config.headers.Authorization = 'user'

    return config
  },
  (error) => Promise.reject(error),
)
export default client
