<template lang="pug">
.top-menu
  router-link(to="/"): h1 D&D Character Manager
  .nav
    slot
</template>

<style lang="stylus">
.top-menu
  background-color $primary-color
  padding 0.5em 1em
  display flex
  justify-content space-between

  h1, a
    color #fff
    text-decoration none
    text-shadow 0px 1px 1px rgba(0, 0, 0, 0.5)

  h1
    margin 0
    padding 0
    font-family Cinzel, serif
    font-weight normal
</style>

