<template lang="pug">
ul.character-list
  li()
    button(v-on:click="$router.push('/')") Back
    button(v-on:click="addCharacter") Add Character
    button(v-on:click="saveCharacters") Save All
  li.character(v-for="character in characters")
    button(v-on:click="removeCharacter(character)") Remove
    |  {{ character.name }}
</template>

<script>
import Character from '../character'

export default {
  name: 'character-list',
  computed: {
    characters() {
      return this.$store.state.characterList
    }
  },
  data: function() {
    return {
      characters: this.initialCharacters
    }
  },
  methods: {
    removeCharacter(character) {
      let id = this.characters.indexOf(character)
      this.characters.splice(id, 1)
    },
    addCharacter(newCharacter) {
      if (!(newCharacter instanceof Character)) {
        newCharacter = new Character()
      }
      this.characters.push(newCharacter)
    },
    saveCharacters() {
      this.$store.commit('store')
    }
  }
}
</script>

<style lang="stylus">
.character-list
  margin 0
  padding 0
  color inherit
  list-style none
</style>
