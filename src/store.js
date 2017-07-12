import _ from 'lodash'
import Vuex from 'vuex'
import Character from './character'

let initialCharacterList = {}

if (window.localStorage) {
  if (localStorage.getItem('characterList') === null) {
    localStorage.characterList = JSON.stringify({})
  }
  initialCharacterList = JSON.parse(localStorage.characterList)
}

for (let i in initialCharacterList) {
  const c = initialCharacterList[i]
  const character = new Character()
  console.log(c, character)
  initialCharacterList[i] = Object.assign(character, c)
}

console.log(initialCharacterList)

if (!Array.isArray(initialCharacterList)) {
  initialCharacterList = {}
}

export default new Vuex.Store({
  state: {
    characterList: initialCharacterList
  },
  mutations: {
    save(state) {
      if (window.localStorage) {
        localStorage.characterList = JSON.stringify(state.characterList)
      }
    },
    addCharacter(state, character) {
      state.characterList.push(character)
    },
    saveCharacter(state, character) {
      let id = state.characterList.indexOf(character)
      state.characterList[id] = character
    },
    updateCharacterName(state, payload) {
      const { character, newName } = payload
      let id = state.characterList.indexOf(character)
      state.characterList[id].name = newName
    },
    archiveCharacter(state, character) {
      let id = state.characterList.indexOf(character)
      state.characterList[id].archived = true
    },
    deleteCharacter(state, character) {
      let id = state.characterList.indexOf(character)
      state.characterList.splice(id, 1)
    }
  },
  getters: {
    activeCharacters(state, getters) {
      return _.filter(state.characterList, c => !c.archived)
    }
  }
})
