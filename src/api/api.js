import { get,post } from "../utils/fetch";

export const login = params => post('/login', params)
export const register = params => post('/register',params)

export default {
    login,
    register
}