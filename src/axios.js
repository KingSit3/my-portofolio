import axios from "axios"

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const zakatAxios = axios.create({
  baseURL: (process.env.VUE_APP_ZAKAT_ENDPOINT),
  headers: {
    'accept': 'application/json',
    'Authorization': 'Bearer '+ localStorage.getItem('token')
  },
  timeout: 5000,
  withCredentials: true
})

// const restoranAxios = axios.create({
//   baseURL: (process.env.VUE_APP_RESTORAN_ENDPOINT),
//   headers: {
//     'accept': 'application/json',
//     'Authorization': 'Bearer '+ localStorage.getItem('token')
//   },
//   timeout: 5000,
//   withCredentials: true
// })

export default {
  zakatAxios,
  // restoranAxios
}