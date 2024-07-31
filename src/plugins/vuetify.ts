// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Styles
import '@/styles/index.scss'

//icons 
import '@mdi/font/css/materialdesignicons.css' 




const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#D9DBE9',
    surface: '#FFFFFF',
    primary: '#A8715A',
    'primary-darken-1': '#A8715A',
    secondary: '#DD8560',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
};

export default createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: myCustomLightTheme,
    },
  },

  icons: {
    defaultSet: 'mdi',
  },

});
