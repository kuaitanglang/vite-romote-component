import { App } from 'vue'
import helloWord from './index.vue'
helloWord.install = (app: App) => {
  app.component(helloWord.name, helloWord)
}

export default helloWord
