// Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Styles
import "@/styles/index.scss";

//icons
import "@mdi/font/css/materialdesignicons.css";

const eduTheme = {
  dark: false,
  variables: {},
  colors: {
    background: "#F5F5F5",
    surface: "#FFFFFF",
    primary: "#0077B6",
    "primary-darken-1": "#005B8D", // Darker shade of primary
    "primary-lighten-1": "#0090DA", // Lighter shade of primary
    "primary-lighten-2": "#35A6E8", // Even lighter shade
    "primary-lighten-3": "#68BCF3", // Lightest shade
    secondary: "#4A4A4A",
    "secondary-darken-1": "#018786",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
  },
};

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: eduTheme,
    },
  },
  defaults: {
    VBtn: {
      color: "primary",
      rounded: "sm",
    },
    VCard: {
      elevation: 2,
      rounded: "lg",
      flat: false,
    },
    VTextField: {
      variant: "outlined",
      density: "comfortable",
    },
    VRating: {
      color: "#FFC107",
    },
  },
  icons: {
    defaultSet: "mdi",
  },
});
