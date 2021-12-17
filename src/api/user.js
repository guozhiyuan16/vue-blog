import axios from '@/utils/request';
import config from './config/user';

export const login = params => axios.post(config.login, params);

export const register = params => axios.post(config.register, params);

// 校验用户是否登录 如果登录过 获取最新用户信息 更新用户
export const validate = () => axios.get(config.validate);