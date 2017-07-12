<template lang="pug">
.main-menu
  h1 D&D Character Manager
  .menu-items
    router-link(to="/characters"): btn.huge Your Characters
    // router-link(to="/data"): btn Data
</template>

<script>
import Button from './Button'
export default {
  components: {
    Btn: Button
  }
}
</script>

<style lang="stylus">
.main-menu
  width 100%
  display flex
  min-width 300px
  flex-wrap wrap
  flex-direction column
  justify-content center
  align-items center
  min-height 100vh

  h1
    font-size 300%
    text-align center
    font-family Cinzel, serif
    font-weight normal
    width 100%
</style>
