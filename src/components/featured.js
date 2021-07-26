import {
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Box,
} from '@chakra-ui/layout'
import NextLink from 'next/link'
import SlideUpWhenVisible from '../hooks/slideUpWhenVisible'
import Card from './card.js'

export default function FeaturedProjects({ projects }) {
  return (
    <>
        <SlideUpWhenVisible threshold={0.1}>
          <Stack spacing={8} w="full">
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>
              <Stack spacing={1}>
                <Stack
                  isInline
                  alignItems="center"
                  justifyContent="space-between"
                >
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

              <Card
                imageURL={projects[0].fields.imageUrl}
                title={projects[0].fields.title}
                desc={projects[0].fields.description}
                githubLink={projects[0].fields.githubLink}
                deployLink={projects[0].fields.deployLink}
                tag={projects[0].fields.tags}
              />

              <Box mt={{ md: '-80%', xl: '-65%' }}>
                <Card
                  imageURL={projects[1].fields.imageUrl}
                  title={projects[1].fields.title}
                  desc={projects[1].fields.description}
                  githubLink={projects[1].fields.githubLink}
                  deployLink={projects[1].fields.deployLink}
                  tag={projects[1].fields.tags}
                />
              </Box>

              <Card
                imageURL={projects[2].fields.imageUrl}
                title={projects[2].fields.title}
                desc={projects[2].fields.description}
                githubLink={projects[2].fields.githubLink}
                deployLink={projects[2].fields.deployLink}
                tag={projects[2].fields.tags}
              />
            </SimpleGrid>
          </Stack>
        </SlideUpWhenVisible>
    </>
  )
}
