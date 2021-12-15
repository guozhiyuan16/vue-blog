import axios from '@/utils/request';
import config from './config/user';

export const login = params => axios.post(config.login, params);

export const register = params => axios.post(config.register, params);