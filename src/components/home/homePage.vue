<template>
  <div class="homePage">
    <ul class="scrollBox">
      <li>
        <particles></particles>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
import Particles from '../canvas/particles'
export default {
  name: 'homePage',
  components: {
    Particles
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.homePage
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  overflow hidden
  ul
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    li
      width 100%
      height 100%
</style>
