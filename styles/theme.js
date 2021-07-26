import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const fluidType = (minFont, maxFont) => {
  let XX = 768 / 100
  let YY = (100 * (maxFont - minFont)) / (1920 - 768)
  let ZZ = minFont / 16
  return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`
}

const colors = {
  background: '#0E1212', 
  secondary: '#f6909d',
  complement: '#66c9ff',
  complementSecondary: '#E5CB60',
  displayColor: '#0E1212',
  textPrimary: '#fdfcfa',
  textPrimaryAlt: '#e2e4e2',
  textSecondary: '#8F9094',
  button1: '#f6909d',
  button2: '#fdfcfa',
  button3: '#0E1212',
  borderColor: '#111111',
}

const fonts = {
  ...chakraTheme.fonts,
  body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
}

const breakpoints = createBreakpoints({
  base: '0em',
  sm: '30em',
  md: '48em',
  lg: '80em',
  xl: '120em',
})

const Link = {
  baseStyle: {
    color: '#F5F9E9',
    _hover: { color: '#f6909d', textDecoration: 'none' },
  },
}

const overrides = {
  ...chakraTheme,
  components: {
    Link,
  },
  config,
  colors,
  fonts,
  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: fluidType(6, 12),
    sm: fluidType(7, 14),
    md: fluidType(8, 16),
    lg: fluidType(9, 18),
    xl: fluidType(10, 20),
    '2xl': fluidType(12, 24),
    '3xl': fluidType(14, 28),
    '4xl': fluidType(18, 36),
    '5xl': fluidType(20, 40),
    '6xl': fluidType(24, 48),
    '7xl': fluidType(32, 64),
    '8xl': fluidType(36, 72),
    display: fluidType(80, 144),
    display2: fluidType(24, 36),
    display3: fluidType(16, 22),
    button: fluidType(14, 16),
    footer: fluidType(14, 18),
    tag: fluidType(10, 14),
  },
}

const customTheme = extendTheme(overrides)

export default customTheme
