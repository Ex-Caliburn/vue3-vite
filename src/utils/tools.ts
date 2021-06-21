// 将数据放入localStorage
export function setItem(key: string, value: any) {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    localStorage.setItem(key, '')
  }
}

// 从localStorage获取数据
export function getItem(key: string) {
  try {
    const tamp = localStorage.getItem(key)
    if (tamp) {
      return JSON.parse(tamp)
    }
    return ''
  } catch (err) {
    console.log(err)
    return ''
  }
}
// 从localStorage删除数据
export function removeItem(reg: string | string[] | RegExp) {
  if (typeof reg === 'string') {
    localStorage.removeItem(reg)
  } else if (reg instanceof Array) {
    reg.forEach((item) => {
      removeItem(item)
    })
  } else if (reg instanceof RegExp) {
    Object.keys(localStorage).forEach((key) => {
      const arr = key.match(reg)
      if (arr && arr.length > 0) {
        localStorage.removeItem(key)
      }
    })
    // for (const key in localStorage) {
    //   const arr = key.match(reg)
    //   if (arr && arr.length > 0) {
    //     localStorage.removeItem(key)
    //   }
    // }
  }
}
