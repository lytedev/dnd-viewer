<template lang="pug">
#character-list
  top-menu
    btn(@click="addCharacter") Add Character
    btn(@click="toggleArchived") {{ showArchived ? 'Hide Archived Characters' : 'Show Archived Characters' }}
  .character-grid
    character-card(v-for="character in activeCharacters" v-bind:character="character")
</template>

<script>
import Button from './Button'
import TopMenu from './TopMenu'
import CharacterCard from './CharacterCard'
import Character from '../character'

export default {
  components: {
    Btn: Button,
    TopMenu: TopMenu,
    CharacterCard: CharacterCard
  },
  computed: {
    characters() {
      return this.showArchived ? this.$store.state.characterList : this.$store.getters.activeCharacters
    }
  },
  data: function() {
    return {
      preRemove: -1,
      showArchived: false,
      characters: this.initialCharacters
    }
  },
  methods: {
    toggleArchived() {
      this.showArchived = !this.showArchived
    },
    addCharacter(newCharacter) {
      if (!(newCharacter instanceof Character)) {
        newCharacter = new Character()
      }
      this.$store.commit('addCharacter', newCharacter)
      this.$store.commit('save')
    },
    saveCharacters() {
      this.$store.commit('save')
    }
  }
}
</script>

<style lang="stylus">
#character-list
  display flex
  width 100%
  flex-direction column
  flex-grow 1

  .character-grid
    display flex
    justify-content center
    flex-wrap wrap
    margin 0.5rem

</style>
