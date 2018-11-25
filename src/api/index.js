// this is aliased in webpack config based on server/client build
import axios from 'axios'

const logRequests = !!process.env.DEBUG_API

axios.defaults.baseURL = 'https://www.binance.co';

export function fetchDataList(){
  //console.log("start")
  return axios.get(`exchange/public/product`)
}

