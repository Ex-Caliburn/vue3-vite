import axios from 'axios'
import { setItem } from '@/utils/tools'
import router from '@/router'

const service = axios.create({ timeout: 60000 }) // 5s请求超时
service.defaults.withCredentials = true // 跨域

// const isProduction = process.env.NODE_ENV === 'production'

// 统一请求处理
service.interceptors.request.use(
  (config) => {
    // 如果在非生产环境,每个请求添加环境判断
    // if (!isProduction) {
    //   const current_env = localStorage.getItem('current_env') || 'test1'
    //   config.headers.Filter = current_env
    // }
    return config
  },
  (error) => {
    console.log(error)
    Promise.reject(error)
  }
)

// 统一响应处理
service.interceptors.response.use(
  (res) => {
    // res.data.err_code = -2
    switch (res.data.err_code) {
      case 0:
      case 200:
        return Promise.resolve(res.data.data)
      case -2:
        // 将当前地址放入storage便于登录成功后返回当前页面
        if (window.location.href.indexOf('login') < 0) {
          setItem('backUrl', window.location.href)
        }
        router.push({ name: 'DomainLogin' })
        break
      default:
        /* eslint-disable */
        return Promise.reject(`${res.data.err_code}:${res.data.err_msg}`)
          /* eslint-disable */
    }
    return Promise.reject(res.data.err_msg)
    /* 如果需要对错误码特殊处理，下面这种更好 */
    // return Promise.reject(res.data)
  },
  (error) => {
    console.error(
      `${error.config.url}:${error.message}:${error.response && error.response.status}`
    )
    return Promise.reject(error)
  }
)

export function getData(url: string, params: Object) {
  return service.get(url, { params })
}

export function postData(url: string, data: Object) {
  return service.post(url, data)
}

export default service
