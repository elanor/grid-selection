'use strict'

import { create, Flex } from 'smbls'

import designSystem from './designSystem'
import * as components from './components' 
import pages from './pages'

create({
  extend: Flex,

  props: {
    theme: 'document',
    flow: 'column',
    height: '100vh',
    align: 'center space-between'
  },

  Header: components.Header, 

  content: {
    extend: Flex,
    props: {
      flex: 1,
      align: 'center center'
    },
    GridSelection: {
      extend: components.GridSelection,
      props: {
        x: 16, 
        y: 8
      }
    }
  },

  Footer: components.Footer 
}, {
  designSystem,
  components,
  pages
})
