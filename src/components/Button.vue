<template lang="pug">
button.button(@click="_click")
  slot
</template>

<script>
module.exports = {
  props: {
    click: {
      type: Function
    }
  },
  methods: {
    _click(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="stylus">
.button
  margin 2px
  border-radius 3px
  text-shadow 0px 1px 1px rgba(0, 0, 0, 0.5)
  background $primary-color
  color #fff
  text-decoration none
  box-shadow none

  &:hover
    background darken($primary-color, 20%)
    box-shadow 0px 2px 2px #000

  &.huge
    font-size 200%

  &.danger
    background $danger-color

    &:hover
      background darken(@background, 20%)
      box-shadow 0px 2px 2px #000
</style>
