import axios from 'axios';
import config from '@/config';
import { message } from 'ant-design-vue';
import { get } from '@/utils/local';
// 每次请求通过axios.create()方法创建axios实例并增添拦截器功能;在此之上我们也再次封装get方法和post方法
class HttpRequest {
    constructor() {
        this.baseURL = config.baseURL;
        this.timeout = 3000;
    }
    mergeOptions(options) {
        return {
            baseURL: this.baseURL,
            timeout: this.timeout,
            ...options
        }
    }
    setInterceptor(instance) {
        instance.interceptors.request.use(
            config => {
                // 增加 token 属性 
                config.headers.Authorization = `Bearer ${ get('token') }`;
                return config;
            })
        instance.interceptors.response.use(
            res => {
                // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
                if (res.status === 200) {
                    // 服务器返回的结果都会放到data中
                    return Promise.resolve(res.data);
                } else {
                    return Promise.reject(res);
                }
            },
            err => {
                // 单独处理其他的状态码异常
                if(err.response){
                    const { status,data } = err.response
                    switch(status){
                        case 401:
                            message.error((data && data.message) || '登录信息过期或未授权，请重新登录！');
                            break;

                        default: 
                            message.error(data.message || `链接错误 ${status}`);
                            break;
                    }
                }else{
                    message.error(err.message);
                }
                return Promise.reject(err);
            }
        )
    }
    request(options) {
        const instance = axios.create(); // 每次都创建axios实例，每个实例的拦截器和其他人的无关，如果使用全局的实例 我想给每次请求单独配置拦截器就无法做到
        this.setInterceptor(instance);
        const opts = this.mergeOptions(options);
        return instance(opts);
    }
    get(url, config = {}) {
        return this.request({
            method: 'get',
            url,
            ...config // 参数可以直接展开
        });
    }
    post(url, data) {
        return this.request({
            method: 'post',
            url,
            data  // post要求必须传入data属性
        });
    }

}

export default new HttpRequest;