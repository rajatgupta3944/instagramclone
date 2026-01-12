// 'use client'

// import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
// import { ColorModeProvider } from './color-mode'

// export function Provider(props) {
//   return (
//     <ChakraProvider value={defaultSystem}>
//       <ColorModeProvider {...props} />
//     </ChakraProvider>
//   )
// }

'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

// Create a theme (you can add overrides here if needed)
const theme = extendTheme({})

export function Provider(props) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
