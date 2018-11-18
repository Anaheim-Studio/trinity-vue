<template lang="pug">
  div.work-container
    div.left-side-container
    div.middle-container
      div.canvas-container
        canvas#myCanvas
        canvas#myCanvasmini
        canvas#cutxCanvas
        canvas#cutyCanvas
    div.right-container
</template>

<script>
import TRI_Frontend from './../common/api/api'

export default {
  data () {
    return {
      renderMode: '', // 渲染模式
    }
  },
  created () {
    // this._connectWS('ws://127.0.0.1:8679/')
    
  },
  mounted () {
    TRI_Frontend.init() // 在 mounted 时，初始化
  },
  methods: {
    _connectWS (url) {

      // 
      let data = {
        renderMode: this.renderMode,
      }

      // ws通信
      TRI_Frontend.connectWS(url)
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
  .canvas-container
    width 100%
    height 100%
    position relative
    // .#myCanvas
.right-container
  width 20%
  background-color yellow
</style>
