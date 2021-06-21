const isLocalHost = false
// if (window.location.host.indexOf('localhost') > -1) {
//   isLocalHost = true
// }

// 请求接口前缀BASE_URL常量
const BASE_URL = {
  bg: isLocalHost ? '/bg3' : '/bg'
}

export default BASE_URL
