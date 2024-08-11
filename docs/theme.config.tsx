import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { MessageCircle} from 'lucide-react'
const config: DocsThemeConfig = {
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
}

export default config