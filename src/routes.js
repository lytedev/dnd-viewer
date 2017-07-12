import App from './App'
import MainMenu from './components/MainMenu.vue'
import CharacterList from './components/CharacterList.vue'
import CharacterViewer from './components/Character.vue'

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
        path: '/data',
        component: MainMenu
      },
      {
        path: 'classes',
        component: MainMenu
      },
      {
        path: 'characters',
        component: CharacterList
      },
      {
        name: 'character',
        path: 'characters/:id',
        component: CharacterViewer
      }
    ]
  }
]

