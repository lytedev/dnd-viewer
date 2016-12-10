<template lang="pug">
  #app
    character-list(v-bind:initialCharacters="storageCharacters")
</template>

<script>
import CharacterList from './components/CharacterList'

if (localStorage.getItem('characterList') === null || typeof localStorage.getItem('characterList') !== 'object') {
  localStorage.characterList = JSON.stringify([])
}

export default {
  data: () => {
    console.log(localStorage)
    return {
      storageCharacters: JSON.parse(localStorage.characterList)
    }
  },
  name: 'app',
  components: {
    'characterList': CharacterList
  }
}
</script>

<style lang="stylus">
*, *::before, *::after
  box-sizing border-box

body, html
  margin 0
  padding 0
  background-color #111
  color #fff
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

a
  color #0af
</style>
