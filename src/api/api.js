import { get,post } from "../utils/fetch";

export const login = params => post('/login', params)
export const register = params => post('/register',params)

export const getArticleList = params => get('/api/article/list',params)
export const getTagList = params => get('/api/tag/list')

export default {
    login,
    register,
    getArticleList,
    getTagList
}