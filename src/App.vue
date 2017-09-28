<template>
  <div id="app">
    <m-header></m-header>
    <tap></tap>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header.vue'
  import Tap from 'components/tab/tab.vue'
  import Player from 'components/player/player.vue'
  export default {
    //name: 'app',
    components: {
      MHeader,
      Tap,
      Player
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/stylus/variable.styl";

</style>
