import axios from 'axios'
import router from '../router'
import {
  message
} from 'ant-design-vue'
import store from '../store'
import {
  API_BASE_URL
} from '@/config'
// import { getToken } from '@/utils'

const service = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000
})

service.interceptors.request.use(
  config => {
    // const token = localStorage.getItem();
    // token && (config.headers.common['Authorization'] = token);
    return config
  },
  error => {
    message.error('bad request')
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    Promise.reject(error)
  }
)

const fetch = (method, url, data = {}, config = {}) => {
  config = config || {}
  config.method = method
  config.url = url
  method.toLocaleLowerCase() === 'get' ? config['params'] = data : config['data'] = data
  return service(config).then(res => {
    let data = res.data
    if (data.code == 600) {
      notification['error']({
        message: '提示',
        description: res.data.msg,
      });
      router.push({
        path: '/login'
      })
      return
    }
    if (!data.success) {
      console.log("info")
      notification['error']({
        message: '提示',
        description: res.data.msg,
      });
      return Promise.reject(data)
    }
    return data
  })
}

const get = (url, data, config) => {
  return fetch('get', url, data, config)
}

const post = (url, data, config) => {
  return fetch('post', url, data, config)
}

export {
  get,
  post
}