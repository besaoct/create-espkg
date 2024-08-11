import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { MessageCircle} from 'lucide-react'
const config: DocsThemeConfig = {
  head:<>
  <meta name="description" content="Node package builder" />
  <meta name="title" content="create-espkg" />
  </>,
  primaryHue:0, primarySaturation:0,
  logo: <span style={{ fontFamily:'monospace', fontWeight:800 }}>create-espkg</span>,
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
      titleTemplate: '%s | create-espkg',
      defaultTitle:'create-espkg',
      description:'Node package builder',
      openGraph:{
        title: 'create-espkg',
        description:'Node package builder'
      }
    }
  }
}

export default config