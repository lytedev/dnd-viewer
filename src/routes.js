import App from './App'
import MainMenu from './components/MainMenu.vue'
import CharacterList from './components/CharacterList.vue'

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/',
        component: MainMenu
      },
      {
        path: 'classes',
        component: MainMenu
      },
      {
        path: 'characters',
        component: CharacterList
      }
    ]
  }
]

