<template lang="pug">
ul.character-list
  li(v-on:click="addCharacter")
    a(href="#") Add Character
  li.character(v-for="character in characters")
    a(href="#" v-on:click="removeCharacter(character)") Remove
    |  {{ character.name }}
</template>

<script>
import Character from '../character'

export default {
  props: ['initialCharacters'],
  name: 'character-list',
  data: function() {
    console.log(this.initialCharacters)
    return {
      characters: this.initialCharacters
    }
  },
  methods: {
    'removeCharacter': function(character) {
      let id = this.characters.indexOf(character)
      this.characters.splice(id, 1)
    },
    'addCharacter': function(newCharacter) {
      if (!(newCharacter instanceof Character)) {
        newCharacter = new Character()
      }
      console.log(this.characters)
      this.characters.push(newCharacter)
    }
  }
}
</script>

<style lang="stylus">
.character-list
  margin 0
  padding 0
  color inherit
</style>
