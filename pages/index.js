import React from 'react'
import Head from 'next/head'
import SEO from '../src/components/seo'
import Layout from '../src/components/layout'
import { Stack } from '@chakra-ui/react'
import Hero from '../src/components/hero'
import About from '../src/components/about'

export default function Home() {
  return (
    <Layout enableTransition="true">
      <Stack
        as="main"
        spacing="144px"
        justifyContent="center"
        alignItems="flex-start"
        px={{ base: '5vw', md: '10vw' }}
        mt={{ base: '15vh', md: '22.5vh' }}
      >
        <Hero />
        <About />
        <SEO />
      </Stack>
    </Layout>
  )
}
