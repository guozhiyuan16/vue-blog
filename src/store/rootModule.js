import * as types from './action-types';
export default {
    state: {
        root:"root",
        loginVisible: false, // 登录
        registerVisible: false, // 注册
        uploadVisible: false, // 上传
    },
    mutations: {
        // 登录框展示
        [types.LOGIN_VISIBLE_STATE](state, payload) {
            state.loginVisible = payload;
        },
        // 注册框展示
        [types.REGISTER_VISIBLE_STATE](state, payload) {
            state.registerVisible = payload;
        },
        // 上传框展示
        [types.UPLOAD_VISIBLE_STATE](state, payload) {
            state.uploadVisible = payload;
        },
    },
    actions: {
    }
}

