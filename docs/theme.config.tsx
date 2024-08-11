import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { MessageCircle} from 'lucide-react'
const config: DocsThemeConfig = {
  primaryHue:0, primarySaturation:0,
  logo: <span>CREATE-ESPKG</span>,
  project: {
    link: 'https://github.com/besaoct/create-espkg',
  },
  chat: {
    icon: <MessageCircle/>,
    link: 'https://linkedin.com/in/besaoct',
  },
  docsRepositoryBase: 'https://github.com/besaoct/create-espkg/docs',
  footer: {
    text: '©️ Shafin (@besaoct)',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - CREATE-ESPKG'
    }
  }
}

export default config