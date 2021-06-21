import BASE_URL from '../url'
import { getData, postData } from '../request'

// 用户登录
async function userLogin(params: Object) {
  return getData(`${BASE_URL.bg}/UserC/Login`, params)
}

// 用户退出
async function userLogout(params: Object) {
  return postData(`${BASE_URL.bg}/UserC/Logout`, params)
}

export { userLogin, userLogout }
