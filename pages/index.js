import React from 'react'
import Head from 'next/head'
import SEO from '../src/components/seo'
import Layout from '../src/components/layout'
import { Stack } from '@chakra-ui/react'
import Hero from '../src/components/hero'
import About from '../src/components/about'
import Featured from '../src/components/featured'
// import FeaturedAlt from '../src/components/featuredAlt'

export default function Home({ projects }) {
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
        <Featured projects={projects} />
        {/* <FeaturedAlt projects={projects} /> */}
        <SEO />
      </Stack>
    </Layout>
  )
}

export async function getStaticProps() {
  let client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  let data = await client.getEntries({
    content_type: 'featuredProjects',
    order: 'fields.order',
  })

  return {
    props: {
      projects: data.items,
    }
  }
}
