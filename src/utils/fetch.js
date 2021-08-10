import axios from 'axios'
import router from '../router'
import { notification } from 'ant-design-vue'
import store from '../store'
import { API_BASE_URL } from '@/config'
import { getToken } from '@/utils'

const service = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    timeout: 10000
})

service.interceptors.request.use( config => {
    const token = localStorage.getItem();
    token && (config.headers.common['Authorization'] = token);
    return config
})