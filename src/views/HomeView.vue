<template>
  <div class="main">
    <div>
      <div></div>
    </div>
    <div class="p-list">
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

    }
  },

  computed: {
    dataList(){
      return this.$store.state.dataList
    }
  },

  beforeMount () {

  },

  beforeDestroy () {

  },

  watch: {

  },

  methods: {


  }
}
</script>

<style lang="stylus" scope>
  .main
    width 1200px;
    margin 0 auto 0 auto;

  .p-list
    display flex;
  .c-item
    flex 1;
    padding 5px 0;
</style>
