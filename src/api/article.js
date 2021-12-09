import axios from '@/utils/request';
import config from './config/article';

export const getArticle = params => axios.post(config.getArticle, params);