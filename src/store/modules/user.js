import * as types from '../action-types';
import * as user from '@/api/user';
import { save ,get ,remove } from '@/utils/local';
import { message } from 'ant-design-vue';

export default {
    state: {
        userInfo : {}, // 用户信息
        hasPermission: false, // 代表是否有权限
    },
    mutations: {
        [types.SET_USER]( state, payload ){
            state.userInfo = payload;
            if( payload && payload.token ){
                save('token',payload.token)
            }else{
                remove('token');
            }
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
        },
        async [types.USER_LOGIN]({commit}, payload) { 
            
            let result = await user.login(payload);
            commit(types.SET_USER, result );
            commit(types.SER_PERMISSION, true );
        },
        async [types.USER_VALIDATE]({commit}){
            if(!get(token)) return false;
            try{
                let result = await user.login(payload);
                commit(types.SET_USER, result );
                commit(types.SER_PERMISSION, true );
                return true;
            }catch(e){
                commit(types.SET_USER, {} );
                commit(types.SER_PERMISSION, false );
                return false;
            }   
        }
    }
}