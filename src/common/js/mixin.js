/**
 * Created by BigZ on 17/9/30.
 */
import {mapGetters} from 'vuex'
export const playlistMixin = {
  computed: {
    ...mapGetters([
      'playlist'
    ])
  },
  mounted(){   //dom ready 的时候
    this.handlePlaylist(this.playlist)
  },
  activated(){ //keep-alive 切换过来会触发
    this.handlePlaylist(this.playlist)
  },
  watch: {
    playlist(newVal){
      this.handlePlaylist(newVal)
    }
  },
  methods: {
    handlePlaylist(){
      throw new Error('component must implement handlePlaylist method')
    }
  }
}
