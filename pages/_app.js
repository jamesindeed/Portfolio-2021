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
          html,
          body {
            min-width: 356px;
            background-color: #0e1212;
            font-size: 100%;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            color: #fdfcfa;
            margin: 0 auto;
          }
          img {
            user-select: none;
            height: auto;
            max-width: 100%;

          }
          ::-webkit-scrollbar {
            width: 3px;
            background: #0e1212;
          }

          ::-webkit-scrollbar-thumb {
            background: #69464a;
            border-radius: 3px;
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
