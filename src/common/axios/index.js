/**
 * Axios基础封装，提供了从env文件读取base请求路径功能，以及请求参数封装
 */
import axios from 'axios'
// import { Message } from 'element-ui'

function Http() {
  /**
   * 此处修改：
   * 不从env读取base路径拼接，改成代理，根据不同的URL代理到不同的服务器地址，提供了访问多个不同服务器的可扩展性
   */
  // //设置http请求基础路径
  // axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

  //请求前置拦截，请求头携带上登录用户信息
  axios.interceptors.request.use(
    config => {
      var userToken = window.sessionStorage.getItem('userToken')
      if (userToken) {
        config.headers.authorization = userToken
      }
      return config
    }
  )
}

function createInstance() {
  //get方法
  Http.prototype.get = function (url = '', params = {}) {
    // 拼接字符串
    let paramsStr = '';
    // 遍历
    Object.keys(params).forEach(key => {
      paramsStr += key + '=' + params[key] + '&'
    });
    // 过滤最后的&
    if (paramsStr) {
      paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'))
    }
    // 拼接完整路径
    url += '?' + paramsStr
    return new Promise((resolve, reject) => {
      axios.get(url).then((response) => {
        resolve(response.data);
      }).catch(error => {
        this.$message.error("网络请求失败")
        this.$message.error(error)
        reject(error);
      })
    })
  }
  //post方法
  Http.prototype.post = function (url = '', params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then((response) => {
        resolve(response.data);
      }).catch(error => {
        this.$message.error("网络请求失败")
        this.$message.error(error)
        reject(error);
      })
    })
  }

  return new Http();
}
var http = createInstance()

export default http