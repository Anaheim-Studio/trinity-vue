<template lang="pug">
  div.home-container home
    div.img-container
      img(class="img" src="../assets/img/bonsai.png")
    el-button 按钮
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.home-container
  font-size 30px
.img-container
  width 100%
  height 400px
  display flex
  justify-content center
  align-items center
.img
  width 700px
  height 100%  
</style>
