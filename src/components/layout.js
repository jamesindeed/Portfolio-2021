import React from 'react'
import { chakra, Flex, Stack, Text } from '@chakra-ui/react'
import Header from './header'

const Layout = ({ enableTransition, children }) => {
  return (
    <>
      <Header enableTransition={enableTransition} />
      <Flex as="main" justifyContent="center" flexDirection="column">
        {children}
      </Flex>
      <Stack alignItems="center" mt={10} mb={5}>
        <Text textAlign="center" fontSize="sm">
          Designed and Developed by James Indeed.
          <br />
          Built with
          <chakra.span fontWeight="semibold" color="button2">
            Next.js
          </chakra.span>
          &
          <chakra.span fontWeight="semibold" color="button2">
            Chakra UI
          </chakra.span>
          . Hosted on
          <chakra.span fontWeight="semibold" color="button2">
            Vercel
          </chakra.span>
          .
        </Text>
      </Stack>
    </>
  )
}

export default Layout
