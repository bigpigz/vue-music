<template>
  <div id="app">
    <m-header></m-header>
    <tap></tap>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header.vue'
  import Tap from 'components/tab/tab.vue'
export default {
  //name: 'app',
  components:{
    MHeader,
    Tap
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/stylus/variable.styl";

</style>
