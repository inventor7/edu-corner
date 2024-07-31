
// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

//assets
import '@/styles/index.scss'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
