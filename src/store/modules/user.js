import * as types from '../action-types';
import {login,register} from '@/api/user.js';
import { message } from 'ant-design-vue';

export default {
    state: {
        login: false, // 是否登录
        role : 2, // 1 超级管理员 2 普通用户
        username : 'Gzy', // 用户名
        avatar : '' // 头像
    },
    mutations: {

    },
    actions: {
        async [types.USER_REGISTER]({commit},userInfo){
            await register(userInfo);
            message.success('注册成功，请重新登录您的账号！')
        },
        async [types.USER_LOGIN]({commit}, userInfo) {
            let result = await login(userInfo);
            console.log(result);
        }
    }
}   