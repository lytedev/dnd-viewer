<template lang="pug">
  #app
    router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

*, *::before, *::after
  box-sizing border-box

html, body
  margin 0
  padding 0

body
  font-family Open Sans, sans-serif
  font-size 100%
  background-color #111
  color #fff
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  min-height 100vh

a, .link
  color #0af
  text-decoration underline
  cursor pointer

button, .btn
  display inline-block
  text-decoration none
  font-family inherit
  font-size inherit
  border none
  background-color #333
  padding 1em
  color #fff
  cursor pointer
  transition background-color 0.2s ease, text-shadow 0.2s ease

  &:hover
    background-color $primary-color
    text-shadow 0 0.05em 0.05em #000

#app
  height 100%
  display flex
  justify-content space-between
  align-items center
  flex-direction column-reverse
  min-height 100vh
</style>
