import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './utils/theme/theme.ts'
import '@fontsource/inter/400.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}  >
      <App />
    </ChakraProvider>
    
  </React.StrictMode>,
)
