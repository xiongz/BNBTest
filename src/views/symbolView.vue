<template>
  <div class="main">
    <div v-text="socket"></div>
    <div class="button" @click="tradeSwitch()" v-text="status==1?'开启':'停止'"></div>
    <div>lastUpdateId: <span v-text="datas.lastUpdateId"></span></div>
    <div>bids:</div>
    <div v-for="bid in datas.bids">
      <div>{{bid.toString()}}</div>
    </div>
    <div>asks:</div>
    <div v-for="ask in datas.asks">
    <div>{{ask.toString()}}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'symbolName',

  data () {
    return {
      socket:"websocket 连接中。。。",
      status:-1,
      ws:null,
      datas:{}
  //    lastUpdateId:"",
   //   bids:[],
   //   asks:[]
    }
  },

  computed: {
  },

  beforeMount () {
    this.initWs(this.$route.params.id.toLocaleLowerCase())
  },

  beforeDestroy () {
    this.closWs()
  },

  watch: {

  },

  methods: {
    tradeSwitch: function () {
    console.log("this.status:",this.status)
      if(this.status == 0){
        this.closWs()
        this.status = 1
        this.datas = {}
        this.socket = "websocket 已停止"
      }else if(this.status == 1){
        this.initWs(this.$route.params.id.toLocaleLowerCase())
      }
    },

    initWs: function (id) {
      var ws = new WebSocket(`wss://stream.binance.cloud:9443/ws/${id}@depth20`)
      this.socket = "websocket 连接中。。。"
      ws.onopen = () => {
        this.socket = "连接成功，数据拉取中。。。"
        this.status = 0
      }
      ws.onmessage = (data) => {
          this.socket = "拉取成功"
          let datas = JSON.parse(data.data)
          this.datas = datas;
     //     this.lastUpdateId = `lastUpdateId: ${datas.lastUpdateId}`
     //     this.bids = datas.bids
     //     this.asks = datas.asks
      }
      ws.onclose = () => {
        ws.close()
      }
      ws.onerror = err => {
          console.log('error', err)
          this.initWs(id)
      }
      this.ws = ws;
    },

    closWs: function(){
      this.ws.onclose()
      this.ws = null
    }
  }
}
</script>

<style lang="stylus" scope>
  .button
    display inline-block;
    padding 5px;
    background rgb(240, 185, 11);
</style>
