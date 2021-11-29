import axios from 'axios';
import { baseURL } from '@/config/index.js';

// 每次请求通过axios.create()方法创建axios实例并增添拦截器功能;在此之上我们也再次封装get方法和post方法
class Http {
    constructor(baseUrl) {
        this.baseURL = baseURL;
        this.timeout = 3000;
    }
    mergeOptions(options) {
        return {
            baseURL: this.baseURL,
            timeout: this.timeout,
            ...options
        }
    }
    setInterceptor(instance){
        instance.interceptors.request.use(config => {
            return config;
        })
        instance.interceptors.response.use(res => {
            if(res.status === 200){
                return Promise.resolve(res.data);
            }else{
                return Promise.reject(res);
            }
        }, err => {
            return Promise.reject(res);
        })
    }
    request(options) {
        const instance = axios.create();
        const opts = this.mergeOptions(options);
        this.setInterceptor(instance);
        return instance(opts);
    }
    get(url,config = {}) {
        return this.request({
            method: 'get',
            url,
            ...config
        });
    }
    post(url,data) {
        return this.request({
            method: 'post',
            url,
            data
        });
    }

}

export default new Http;