<template lang="pug">
.main-menu
  router-link(to="/characters") Characters
  router-link(to="/classes") Classes
</template>

<script>
</script>

<style lang="stylus">
.main-menu
  display flex
  min-width 300px
  flex-wrap wrap
  justify-content space-around
  align-items center
  min-height 100vh
  background #222

  a
    display flex
    justify-content center
    align-items center
    background #333
    width 50%
    padding 1em
</style>
