import React from 'react'
import { chakra, Flex, Stack, Text } from '@chakra-ui/react'
import Header from './header'
import Footer from './footer'

const Layout = ({ enableTransition, children }) => {
  return (
    <>
      <Header enableTransition={enableTransition} />
      <Flex as="main" justifyContent="center" flexDirection="column">
        {children}
      </Flex>
      <Footer />
    </>
  )
}

export default Layout
