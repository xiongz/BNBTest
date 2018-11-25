<template>
  <div class="main">
    <div class="fixed">
    <div class="p-list">
      <div class="i-item" :class="market=='BNB'?'active':''" @click="changeMarket('BNB')">BNB市场</div>
      <div class="i-item" :class="market=='BTC'?'active':''" @click="changeMarket('BTC')">BTC市场</div>
      <div class="i-item" :class="market=='ETH'?'active':''" @click="changeMarket('ETH')">ETH市场</div>
      <div class="i-item" :class="market=='USDT'?'active':''" @click="changeMarket('USDT')">USDT市场</div>
    </div>
    </div>
    <div class="p-list" style="margin-top:45px;">
      <div class="c-item">市场</div>
      <div class="c-item">币种</div>
      <div class="c-item">最新价</div>
      <div class="c-item">24最高价</div>
      <div class="c-item">24最低价</div>
      <div class="c-item">24成交量</div>
    </div>
    <div class="" v-for="item in dataList">
       <router-link class="p-list" :to="'/symbol/' + item.symbol">
            <div class="c-item">{{item.symbol | symbolF(item.baseAsset)}}</div>
            <div class="c-item" v-text="item.baseAsset"></div>
            <div class="c-item" v-text="item.close"></div>
            <div class="c-item" v-text="item.high"></div>
            <div class="c-item" v-text="item.low"></div>
            <div class="c-item" v-text="item.tradedMoney"></div>
        </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',

  asyncData ({ store, route: { params: { id }}}) {
     return store.dispatch('FECT_DATA_LIST')
  },

  data () {
    return {
      market:"BNB"
    }
  },

  computed: {
    dataList(){
      return this.$store.state.dataList.filter((v, i) => {
        return this.market == v.marketName
      })
    }
  },

  beforeMount () {

  },

  beforeDestroy () {

  },

  watch: {

  },

  methods: {
    changeMarket: function(market){
      this.market = market
    }

  }
}
</script>

<style lang="stylus" scope>
  .main
    width 1200px;
    margin 0 auto 0 auto;
  .fixed
    position fixed;
    top 55px;
    width 100%;
    background #fff;

  .p-list
    display flex;
  .i-item
    cursor: pointer;
    background-color: rgb(249, 249, 249);
    color: rgb(102, 102, 102);
    height: 34px;
    line-height: 34px;
    font-size: 14px;
    font-weight: bold;
    user-select: none;
    z-index: 100;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(230, 230, 230);
    border-image: initial;
    padding: 0px 17px;
    margin: 0px -1px -1px 0px;
    transition: none;
  .active
    cursor: pointer;
    background-color: rgb(255, 255, 255);
    color: rgb(245, 188, 0);
    height: 34px;
    line-height: 34px;
    font-size: 14px;
    font-weight: bold;
    user-select: none;
    z-index: 100;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(230, 230, 230) rgb(230, 230, 230) rgb(255, 255, 255);
    border-image: initial;
    padding: 0px 17px;
    margin: 0px -1px -1px 0px;
    transition: none;
  .c-item
    flex 1;
    padding 5px 0;
</style>
