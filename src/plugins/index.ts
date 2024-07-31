/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import { createPinia } from 'pinia'
import router from '../router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import i18n from "./i18n";


// Types
import type { App } from 'vue'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export function registerPlugins (app: App) {
  app
    .use(i18n)
    .use(vuetify)
    .use(router)
    .use(pinia)
}
