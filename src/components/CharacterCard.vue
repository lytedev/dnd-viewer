<template lang="pug">
.character(@click.stop.prevent="editCharacter()")
  img.portrait(:src="character.portraitUrl")
  .name {{ character.name }} {{ character.archived }}
  .actions
    router-link(:to="{ name: 'character', params: { id: characterId }}" v-if="!preRemove").btn
      | View
    a(v-if="preRemove" @click.stop.prevent="preRemoveCharacter").btn.danger
      | Archive for sure?
  a(v-show="!preRemove" @click.stop.prevent="preRemoveCharacter" v-bind:title="archiveTitle(character)").archive-button &times;
</template>

<script>
import Button from './Button'
// import Character from '../character'

export default {
  name: 'character-list',
  props: {
    character: {
      required: true
    }
  },
  computed: {
    characterId() {
      return this.$store.state.characterList.indexOf(this.character)
    }
  },
  components: {
    Btn: Button
  },
  data() {
    return {
      preRemove: false
    }
  },
  methods: {
    editCharacter() {
      this.$router.push('/characters/' + this.characterId)
    },
    archiveTitle() {
      return 'Archive ' + this.character.name
    },
    preRemoveCharacter() {
      if (this.preRemove) {
        this.removeCharacter(this.character)
      } else {
        this.preRemove = true
      }
    },
    removeCharacter() {
      this.$store.commit('archiveCharacter', this.character)
      this.$store.commit('save')
    }
  }
}
</script>

<style lang="stylus">
.character
  position relative
  margin 1rem
  padding 0
  border solid 1px #444
  width 200px
  display flex
  flex-direction column
  align-items center
  justify-content flex-start
  transition all 0.2s ease

  .archive-button
    opacity 0
    text-decoration none
    color #888
    position absolute
    top 0
    left 0
    padding 1rem
    line-height 0.5em
    cursor pointer
    transition all 0.2s ease

    &:hover
      opacity 1
      color $danger-color

  .portrait
    margin-top 1rem

  .actions
    margin-top auto
    width 100%

    .btn
      text-align center
      display block
      background-color $primary-color

      &.danger
        background $danger-color

  &:hover
    background #222

    .archive-button
      opacity 1

  .name
    text-align center
    margin 1rem 0.5rem
    padding 0 0.5em

    /*
    &::before
      color alpha(#fff, 50%)
      content "Name: "
    */
</style>
