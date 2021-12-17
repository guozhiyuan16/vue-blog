import * as types from '../action-types';
import * as user from '@/api/user';
// import { set } from '@/utils/local';
import { message } from 'ant-design-vue';

export default {
    state: {
        userInfo : {}, // 用户信息
        hasPermission: false, // 代表是否有权限
    },
    mutations: {
        [types.SET_USER]( state, payload ){
            state.userInfo = payload;
            // if( userInfo && userInfo.token ){
            //     set('token',userInfo.token)
            // }
        },
        [types.SER_PERMISSION]( state, has ){
            state.hasPermission = has;
        },
        [types.USER_LOGIN_OUT]( state ){
            state.userInfo = {};
            state.hasPermission = false;
        }
    },
    actions: {
        async [types.USER_REGISTER]({ dispatch },userInfo){
            await user.register(userInfo);
            message.success('注册成功，请重新登录您的账号！')
        },
        async [types.USER_LOGIN]({commit}, payload) { 
            
            let result = await user.login(payload);
            commit(types.SET_USER, result );
            commit(types.SER_PERMISSION, true );
        }
    }
}