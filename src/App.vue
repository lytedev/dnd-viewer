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
@import url('https://fonts.googleapis.com/css?family=Open+Sans;Cinzel');

*, *::before, *::after
  box-sizing border-box

html
  font-size 62.5%

html, body
  margin 0
  padding 0

body
  font-family Open Sans, sans-serif
  background-color #111
  color #fff
  font-size 1.8rem
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  min-height 100vh

table, tr, td
  padding 0
  margin 0

input, textarea, button
  outline none
  display inline
  width auto
  background transparent
  border none
  border-bottom solid 2px transparent
  font inherit
  padding 0.5em 1.0em
  color inherit

  transition 0.5s ease

  &:hover
    border-bottom-color #666

    &:disabled
      border-bottom dashed 2px #444

  &:focus
    border-bottom-color $primary-color

    &:disabled
      border-bottom dashed 2px #444

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
  padding 0.5em 1.0em
  color #fff
  cursor pointer
  transition background-color 0.2s ease, text-shadow 0.2s ease, box-shadow 0.2s ease

  &:hover
    background-color $primary-color
    text-shadow 0 0.05em 0.05em #000

#app
  height 100%
  display flex
  justify-content space-between
  align-items flex-start
  flex-direction column
  min-height 100vh

ul, ol
  margin 0
  padding 0
  list-style none

.parent-show-hover-trigger
  .show-on-parent-hover
    visibility hidden

    &.slide-fade-left
      visibility visible
      opacity 0
      transform translate(20px)
      transition all 0.2s ease

  &:hover
    .show-on-parent-hover
      visibility visible

      &.slide-fade-left
        visibility visible
        opacity 1
        transform translate(0px)

</style>
