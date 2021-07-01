import React, { useRef } from 'react'
import NextLink from 'next/link'
import {
  Button,
  Flex,
  Box,
  Text,
  Slide,
  useDisclosure,
  Icon,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  HStack,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { HiMenuAlt3 } from 'react-icons/hi'
import {
  FaFacebookF,
  FaInstagram,
  FaGithubAlt,
  FaDribbble,
} from 'react-icons/fa'

const social = [
  {
    path: '/projects',
    icon: <FaFacebookF />,
  },
  {
    path: '/',
    icon: <FaInstagram />,
  },
  {
    path: '/',
    icon: <FaGithubAlt />,
  },
]

const Header = ({ enableTransition }) => {
  const firstField = useRef()
  const [isLarger768] = useMediaQuery('(min-width: 768px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const Logo = styled.span`
    color: #12141d;
    font-weight: 600;
    margin-left: 2px;
    &:hover {
      color: #ffb7b7;
      transition: ease-in-out 0.1s;
    }
  `
  const LogoLight = styled.span`
    color: #f5f9e9;
    font-weight: 600;
    margin-left: 2px;
  `
  const Bars = styled.span`
    color: #12141d;
    &:hover {
      color: #ffb7b7;
      transition: ease-in-out 0.1s;
    }
  `
  const SocialIcons = styled.a`
    color: #f5f9e9;
    font-size: 14;
    transition: all 0.25s;
    cursor: pointer;
    &:hover {
      color: #ffb7b7;
    }
  `

  const MobileDrawer = () => (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="complement">
          <DrawerCloseButton />
          <DrawerHeader h="71" borderBottomWidth="0.5px" mb="10">
            <Text
              cursor="pointer"
              color="displayColor"
              fontWeight="bold"
              fontSize="32px"
              marginTop="-1"
            >
              <LogoLight>&#585;&#7787;</LogoLight>
            </Text>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Home
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Projects
                </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Blog
                </Button>
              </NextLink>
            </Stack>
            <HStack
              mb="10"
              bottom="0"
              left="0"
              position="absolute"
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              {social.map((socialItem, i) => (
                <SocialIcons key={i} href={socialItem.path}>
                  {socialItem.icon}
                </SocialIcons>
              ))}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )

  return (
    <Box zIndex="99">
      <Slide
        transition={
          enableTransition
            ? { enter: { duration: 0.5, delay: 0.01 } }
            : { enter: { duration: 0, delay: 0 } }
        }
        direction="top"
        reverse={true}
        in={true}
      >
        <Flex
          as="nav"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          px="3vw"
          py="3"
          borderBottom="0.5px solid #1e2029"
          background="background"
        >
          <NextLink href="/" passHref>
            <Text
              cursor="pointer"
              color="textPrimary"
              fontWeight="bold"
              fontSize="32px"
            >
              <Logo>&#585;&#7787;</Logo>
            </Text>
          </NextLink>
          {isLarger768 ? (
            <Box color="textSecondary">
              <NextLink href="/" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  p="4"
                  ml="3vw"
                  fontSize="16px"
                  color="textPrimary"
                  textDecorationColor="transparent"
                  _active={{
                    transform: 'scale(0.95)',
                  }}
                  _hover={{
                    color: '#ffb7b7',
                    textDecoration: 'underline',
                    transition: 'ease-in-out 0.1s',
                  }}
                >
                  Home
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  p="4"
                  ml="3vw"
                  fontSize="16px"
                  color="textPrimary"
                  textDecorationColor="transparent"
                  _active={{
                    transform: 'scale(0.95)',
                  }}
                  _hover={{
                    color: '#ffb7b7',
                    textDecoration: 'underline',
                    transition: 'ease-in-out 0.1s',
                  }}
                >
                  Projects
                </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  p="4"
                  ml="3vw"
                  fontSize="16px"
                  color="textPrimary"
                  textDecorationColor="transparent"
                  _active={{
                    transform: 'scale(0.95)',
                  }}
                  _hover={{
                    color: '#ffb7b7',
                    textDecoration: 'underline',
                    transition: 'ease-in-out 0.1s',
                  }}
                >
                  Blog
                </Button>
              </NextLink>
            </Box>
          ) : (
            <Bars>
              <Icon as={HiMenuAlt3} h={8} w={8} onClick={onOpen} />
            </Bars>
          )}
        </Flex>
      </Slide>
      <MobileDrawer />
    </Box>
  )
}

export default Header
