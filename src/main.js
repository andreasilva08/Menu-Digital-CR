import { createApp } from 'vue'
import {
  Quasar,
  Notify,
  Dialog,
  ClosePopup,
  Ripple,
  QLayout,
  QHeader,
  QPageContainer,
  QPage,
  QToolbar,
  QBtn,
  QIcon,
  QCard,
  QCardSection,
  QCardActions,
  QBadge,
  QDialog,
  QImg,
  QInput,
  QSeparator,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QDrawer,
  QAvatar,
  QChip,
  QTooltip,
  QSpinnerDots,
} from 'quasar'
import router from './router/index.js'
import App from './App.vue'

// Import Quasar css
import 'quasar/dist/quasar.css'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'

// Import custom application styling
import './index.css'

const app = createApp(App)

app.use(Quasar, {
  components: {
    QLayout,
    QHeader,
    QPageContainer,
    QPage,
    QToolbar,
    QBtn,
    QIcon,
    QCard,
    QCardSection,
    QCardActions,
    QBadge,
    QDialog,
    QImg,
    QInput,
    QSeparator,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QDrawer,
    QAvatar,
    QChip,
    QTooltip,
    QSpinnerDots,
  },
  directives: {
    ClosePopup,
    Ripple,
  },
  plugins: {
    Notify,
    Dialog,
  },
  config: {
    brand: {
      primary: '#B21E27',
      secondary: '#1A1A1A',
      accent: '#C62828',
      dark: '#111111',
      positive: '#2E7D32',
      negative: '#C62828',
      info: '#0288D1',
      warning: '#F57C00',
    },
    notify: {
      position: 'top-right',
      timeout: 2500,
    },
  },
})

app.use(router)

app.mount('#app')
