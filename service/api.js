import axios from 'axios'
import config from '../myconfig'

const ApiHost = config.api
const Http = axios.create({
  baseUrl: ApiHost
})

const get = (url, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await Http.get(url, data)
      if (res.status === 200) {
        if (res.data.success) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      } else {
        reject(res)
      }
    } catch (error) {
      reject(error)
    }
  })
}
const post = (url, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await Http.post(url, data)
      if (res.status === 200) {
        if (res.data.success) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      } else {
        reject(res)
      }
    } catch (error) {
      reject(error)
    }
  })
}

export default {
  get,
  post
}
