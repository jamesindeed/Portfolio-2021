import React from 'react'
import { Container, Box, SimpleGrid, Stack, Heading, Text } from '@chakra-ui/layout'
import Card from './card.js'
import Carousel from 'react-multi-carousel'
import NextLink from 'next/link'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

const FeaturedAlt = ({ projects }) => {
  return (
    <>
      <Stack spacing={8} w="100%">
        <Stack spacing={1}>
          <Stack isInline alignItems="center" justifyContent="space-between">
            <Heading fontSize="display2" color="textPrimary">
              All Case Studies.
            </Heading>
          </Stack>
          <NextLink href="/projects">
            <Text
              color="secondary"
              display={{ base: 'none', md: 'block' }}
              fontSize="display3"
              transition="0.2s ease-in-out"
              _hover={{ color: 'complement' }}
            >
              See more &rarr;
            </Text>
          </NextLink>
        </Stack>
        <SimpleGrid
          columns={{base: 1, sm: 2}}
          width="100%"
          mx="auto"
          gridGap="2em"
          justifyContent="center"
        >
          <Card
            imageURL={projects[0].fields.imageUrl}
            title={projects[0].fields.title}
            desc={projects[0].fields.description}
            githubLink={projects[0].fields.description}
            deployLink={projects[0].fields.deployLink}
            tag={projects[0].fields.tags}
          />
          <Card
            imageURL={projects[1].fields.imageUrl}
            title={projects[1].fields.title}
            desc={projects[1].fields.description}
            githubLink={projects[1].fields.description}
            deployLink={projects[1].fields.deployLink}
            tag={projects[1].fields.tags}
          />
          <Card
            imageURL={projects[2].fields.imageUrl}
            title={projects[2].fields.title}
            desc={projects[2].fields.description}
            githubLink={projects[2].fields.description}
            deployLink={projects[2].fields.deployLink}
            tag={projects[2].fields.tags}
          />
          <Card
            imageURL={projects[2].fields.imageUrl}
            title={projects[2].fields.title}
            desc={projects[2].fields.description}
            githubLink={projects[2].fields.description}
            deployLink={projects[2].fields.deployLink}
            tag={projects[2].fields.tags}
          />
        </SimpleGrid>
      </Stack>
    </>
  )
}

export default FeaturedAlt
