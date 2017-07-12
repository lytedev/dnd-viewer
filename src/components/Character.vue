<template lang="pug">
#character
  ul
    li()
      button(v-on:click="$router.push('/characters')") Back to List
      button(v-on:click="saveCharacter") Save
    input(:value="character.name" @input="updateName" spellcheck="false")
  #editor
    p This is the editor
</template>

<script>
// import Character from '../character'

export default {
  name: 'character-list',
  computed: {
    characters() {
      return this.$store.state.characterList
    },
    character() {
      return this.$store.state.characterList[this.$route.params.id]
    }
  },
  data: function() {
    return {}
  },
  methods: {
    updateName(e) {
      const newName = e.target.value
      this.$store.commit('updateCharacterName', { character: this.character, newName: newName })
      this.saveCharacter()
    },
    saveCharacter() {
      this.$store.commit('save')
    }
  }
}
</script>

<style lang="stylus">
#character-list
  display flex

</style>
