import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../styles/theme'
import { Global, css } from '@emotion/react'
import { prismDarkTheme, prismBaseTheme } from '../styles/prism'
import 'focus-visible/dist/focus-visible'
const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${prismDarkTheme};
          ::selection {
            background-color: #ffb7b7;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            background-image: 
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: #0e1212;
            color: #fdfcfa,
;
          }
          ::-webkit-scrollbar {
            width: 8px;
            background: #080808;
          }

          ::-webkit-scrollbar-thumb {
            background: #111111;
            border-radius: 8px;
          }
          .js-focus-visible :focus:not([data-focus-visible-added]) {
            outline: none;
            box-shadow: none;
          }
        `}
      />
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  )
}
export default MyApp
