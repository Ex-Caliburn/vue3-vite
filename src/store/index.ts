import { createStore, createLogger } from 'vuex'

import app from './modules/app'
import number2 from './modules/number2'

const debug = process.env.NODE_ENV !== 'production' // 开发环境的状态改变会在console输出
console.log(process.env.NODE_ENV, debug)

export default createStore({
  modules: {
    app,
    number2
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
