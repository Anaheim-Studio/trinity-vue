<template lang="pug">
  div.work-container
    div.left-side-container
    div.middle-container
    div.right-container
</template>

<script>
import Api from './../common/api/api'

export default {
  data () {
    return {
      renderMode: '', // 渲染模式
    }
  },
  created () {
    this._connectWS('ws://127.0.0.1:8679/')
  },
  methods: {
    _connectWS (url) {

      // 
      let data = {
        renderMode: this.renderMode,
      }

      // ws通信
      Api.connectWS(url)
    }
  }
}
</script>

<style lang="stylus" scoped>
.work-container
  display flex
  width 100%
  height 1080px
.left-side-container
  width 20%
  background-color red
.middle-container
  width 60%
  background-color blue
 .right-container
  width 20%
  background-color yellow
</style>
