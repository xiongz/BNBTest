import {
  fetchDataList
} from '../api'

export default {

  FECT_DATA_LIST: ({commit}) => {
    return fetchDataList().then(dataList => {
      commit("SET_DATA_LIST", {dataList:dataList.data.data})
    }).catch(err => {
      if(typeof window != "undefined"){
        window.location.reload()
      }else{
        commit("SET_DATA_LIST", {dataList:[]})
      }
    })
    //commit("SET_DATA_LIST", {
    //  dataList:
    //      [{"symbol":"ETHSGD","quoteAssetName":"SGD","tradedMoney":357.0,"baseAssetUnit":"","baseAssetName":"ETH","baseAsset":"ETH","tickSize":"0.0000001","prevClose":140.0,"activeBuy":0.0,"high":"140.0000000","lastAggTradeId":-1,"low":"140.0000000","matchingUnitType":"STANDARD","close":"140.0000000","quoteAsset":"SGD","productType":null,"active":true,"minTrade":0.01000000,"activeSell":2.55,"withdrawFee":"10","volume":"2.5500000","decimalPlaces":8,"quoteAssetUnit":"","open":"140.0000000","status":"TRADING","minQty":1E-8},{"symbol":"BTCSGD","quoteAssetName":"SGD","tradedMoney":180.6,"baseAssetUnit":"฿","baseAssetName":"Bitcoin","baseAsset":"BTC","tickSize":"0.01","prevClose":53.7,"activeBuy":0.0,"high":"53.70","lastAggTradeId":-1,"low":"1.10","matchingUnitType":"STANDARD","close":"5.00","quoteAsset":"SGD","productType":null,"active":true,"minTrade":0.00000100,"activeSell":57.0,"withdrawFee":"10","volume":"57.00","decimalPlaces":8,"quoteAssetUnit":"","open":"53.70","status":"TRADING","minQty":1E-8}]
    //})
  }
}
