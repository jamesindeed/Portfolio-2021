import React from 'react'
import { Box, Flex, Text, chakra } from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import { FaFacebookF, FaInstagram, FaGithub, FaDribbble } from 'react-icons/fa'

const social = [
  {
    path: '/',
    icon: <FaFacebookF />,
  },
  {
    path: '/',
    icon: <FaInstagram />,
  },
  {
    path: '/',
    icon: <FaGithub />,
  },
]

const Footer = () => {
  const Logo = styled.span`
    color: #fdfcfa;
    font-weight: 600;
    margin-left: 2px;
    &:hover {
      color: #f6909d;
      transition: ease-in-out 0.1s;
    }
  `
  const Link = styled.span`
    color: #fdfcfa;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.35s;
    display: block;
    text-decoration: none;
    padding-left: 2em;
    padding-right: 2em;
    &:hover {
      color: #f6909d;
    }
    &:hover:nth-of-type(even) {
      color: #66c9ff;
    }
  `
  const SocialIcons = styled.a`
    padding-left: 0.5em;
    padding-right: 0.5em;
    color: #fdfcfa;
    font-size: 14;
    transition: all 0.25s;
    cursor: pointer;
    &:hover {
      color: #e5cb60;
    }
  `

  return (
    <>
      <Box
        display="flex"
        pt="8"
        pb="40px"
        textAlign="center"
        flexDirection="column"
        mt={{ base: '2em', md: '2.5em', lg: '5em' }}
      >
        <NextLink href="/" passHref>
          <Text
            cursor="pointer"
            fontWeight="bold"
            fontSize={{ base: '2.3em', lg: '2.8em' }}
          >
            <Logo>&#585;&#7787;</Logo>
          </Text>
        </NextLink>
        <Flex
          alignItems="center"
          justifyContent="center"
          // flexWrap="wrap"
          mt={{ base: '1em', md: '2em' }}
          mb={{ base: '1em', md: '2em' }}
          fontSize="footer"
        >
          <Link>
            <NextLink href="/">Home</NextLink>
          </Link>
          <Link>
            <NextLink href="/blog">Blog</NextLink>
          </Link>
          <Link>
            <NextLink href="/projects">Projects</NextLink>
          </Link>
          <Link>
            <NextLink href="/contact">Contact</NextLink>
          </Link>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          fontSize="button"
          mb={{ base: '1em', md: '2em' }}
        >
          {social.map((socialItem, i) => (
            <SocialIcons key={i} href={socialItem.path}>
              {socialItem.icon}
            </SocialIcons>
          ))}
        </Flex>

        <Text fontSize={{ base: '10', lg: '14' }}>
          Copyright by {new Date().getFullYear()}
          <chakra.span fontWeight="semibold" color="button1">
            {' '}
            James Troughton
          </chakra.span>
        </Text>
        <Text fontSize={{ base: '10', lg: '14' }}>
          <div>
            Icons made by{' '}
            <a href="https://www.freepik.com" title="Freepik">
              Freepik
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </Text>
      </Box>
    </>
  )
}

export default Footer
