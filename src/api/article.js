import axios from '@/utils/request';
import config from './config/article';

export const getArticle = params => axios.post(config.getArticle, params); // 获取文章列表

export const getTag = () => axios.get(config.getTag); // 获取tag列表

export const getCategory = () => axios.get(config.getCategory); // 获取分类列表