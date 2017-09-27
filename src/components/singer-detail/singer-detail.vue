<template>
  <transition name="slide">
    <div class="singer-detail">

    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from 'api/singer'
  import {ERR_OK} from 'api/config'
  export default{
    computed: {
      ...mapGetters([
        'singer'
      ])
    },
    created(){
      this._getDetail()
      console.log(this.singer);
    },
    methods: {
      _getDetail(){
        if (!this.singer.id) {
          //判断如果没有获取到id 直接回到指定路由
          this.$router.push('/singer')
        }
        getSingerDetail(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.data.list);
          }
        })
      }
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/stylus/variable"

  .singer-detail
    position: fixed
    z-index: 100
    top: 0
    left 0
    right: 0
    bottom: 0
    background: $color-background

  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
