import { React, useState } from 'react'
import { Stack, Heading, Text, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../../src/components/layout'
import Card from '../../src/components/card'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { FaSearch as Icon } from 'react-icons/fa'

export default function Projects({ projects }) {
  const [query, setQuery] = useState('')
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <Layout>
        <Stack
          spacing={10}
          justifyContent="center"
          px={['5vw', '10vw']}
          my={['15vh', '15vh', '22.5vh', '22.5vh']}
        >
          <Stack spacing={5}>
            {' '}
            <Heading color="textPrimary" fontSize="display2">
              Projects
            </Heading>
            <Text fontSize={{ base: '14px', md: '16px' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
              consequatur ipsa sequi deserunt aspernatur impedit!
            </Text>
            <InputGroup maxW="400px">
              <InputRightElement
                fontSize={{ base: '14px', md: '16px' }}
                pointerEvents="none"
                children={<Icon />}
              />
              <Input
                fontSize={{ base: '14px', md: '16px' }}
                type="text"
                placeholder="Search projects"
                value={query}
                onChange={handleChange}
              />
            </InputGroup>
            <Divider />
          </Stack>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={{base: 10, xl: 20}}>
            {projects
              .filter((e) =>
                e.fields.title.toLowerCase().includes(query.toLowerCase()),
              )
              .map((project) => (
                <Card
                  key={project.fields.title}
                  imageURL={project.fields.imageUrl}
                  title={project.fields.title}
                  desc={project.fields.description}
                  githubLink={project.fields.githubLink}
                  deployLink={project.fields.deployLink}
                  tag={project.fields.tags}
                />
              ))}
          </SimpleGrid>
        </Stack>
      </Layout>
    </>
  )
}

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'featuredProjects', //Switch form featuredProjects to projects one added in Contentful
    order: 'sys.updatedAt',
  })
  return {
    props: {
      projects: data.items.reverse(),
    },
  }
}
