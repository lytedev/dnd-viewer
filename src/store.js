import Vuex from 'vuex'

let initialCharacterList = []

if (window.localStorage) {
  if (localStorage.getItem('characterList') === null) {
    localStorage.characterList = JSON.stringify([])
  }
  initialCharacterList = JSON.parse(localStorage.characterList)
}

export default new Vuex.Store({
  state: {
    characterList: initialCharacterList
  },
  mutations: {
    save(state) {
      state.characterList
    },
    store(state) {
      console.log(state)
      if (window.localStorage) {
        localStorage.characterList = JSON.stringify(state.characterList)
      }
    }
  }
})
