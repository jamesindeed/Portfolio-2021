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
        <Text textAlign="center" fontSize="lg">
          Designed and Developed by James Troughton.
          <br />
          Built with{' '}
          <chakra.span fontWeight="semibold" color="button1">
            Next.js
          </chakra.span>{' '}
          &{' '}
          <chakra.span fontWeight="semibold" color="button1">
            Chakra UI
          </chakra.span>
          . Hosted on{' '}
          <chakra.span fontWeight="semibold" color="button1">
            Vercel
          </chakra.span>
          .
        </Text>
      </Stack>
    </>
  )
}

export default Layout
