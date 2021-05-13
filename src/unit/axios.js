import axios from 'axios'

// 请求拦截
axios.interceptors.request.use(config => {
  if (config.method === 'get') {
    if (config.params) {
      // config.params.time = `start_${new Date().getTime()}`
    }
  }
  if (config.method === 'post') {
    if (config.data) {
      // config.data.timeEnd = `end_${new Date().getTime()}`
    }
  }
  return config
})

// 响应拦截
axios.interceptors.response.use(res => {
  return res
})

axios.defaults.baseURL = 'https://ydncs.ossxrcloud.net/yrcpt/'
axios.defaults.withCredentials = true
export default axios
