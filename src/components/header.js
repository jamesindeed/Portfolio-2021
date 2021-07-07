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
  ScaleFade,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { HiMenuAlt3 } from 'react-icons/hi'
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaDribbble,
} from 'react-icons/fa'

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

const Header = ({ enableTransition }) => {
  const firstField = useRef()
  const [isLarger768] = useMediaQuery('(min-width: 768px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const Logo = styled.span`
    color: #fdfcfa;
    font-weight: 600;
    margin-left: 2px;
    &:hover {
      color: #f6909d;
      transition: ease-in-out 0.1s;
    }
  `
  const LogoDrawer = styled.span`
    color: #0e1212;
    font-weight: 600;
    margin-left: 2px;
    &:hover {
      color: #f6909d;
      transition: ease-in-out 0.1s;
    }
  `
  const Bars = styled.span`
    color: #fdfcfa;
    &:hover {
      color: #f6909d;
      transition: ease-in-out 0.1s;
    }
  `
  const SocialIcons = styled.a`
    color: #0e1212;
    font-size: 14;
    transition: all 0.25s;
    cursor: pointer;
    &:hover {
      color: #f6909d;
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
        <DrawerContent backgroundColor="textPrimary">
          <DrawerCloseButton color="background" />
          <DrawerHeader
            h="71"
            borderColor="textSecondary"
            borderBottomWidth="1px"
            mb="10"
          >
            <Text
              cursor="pointer"
              fontWeight="bold"
              fontSize="32px"
              marginTop="-1"
            >
              <LogoDrawer>&#585;&#7787;</LogoDrawer>
            </Text>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <NextLink href="/" passHref>
                <Button
                  color="background"
                  as="a"
                  variant="ghost"
                  fontSize="16px"
                  _hover={{
                    color: '#f6909d',
                  }}
                >
                  Home
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button
                  color="background"
                  as="a"
                  variant="ghost"
                  fontSize="16px"
                  _hover={{
                    color: '#f6909d',
                  }}
                >
                  Projects
                </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Button
                  color="background"
                  as="a"
                  variant="ghost"
                  fontSize="16px"
                  _hover={{
                    color: '#f6909d',
                  }}
                >
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
    <Box zIndex="99" h="0px">
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
          // borderBottom="0.5px solid #8F9094"
          background="#0E1212"
        >
          <NextLink href="/" passHref>
            <Text cursor="pointer" fontWeight="bold" fontSize="2.3em">
              <Logo>&#585;&#7787;</Logo>
            </Text>
          </NextLink>
          {isLarger768 ? (
            <Box color="textSecondary">
              <NextLink href="/" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  p="2"
                  ml="3vw"
                  fontSize="16px"
                  color="textPrimary"
                  textDecorationColor="transparent"
                  _active={{
                    transform: 'scale(0.95)',
                  }}
                  _hover={{
                    color: 'secondary',
                    textDecoration: 'underline',
                    transition: 'ease-in-out 0.1s',
                  }}
                >
                  {'Home'}
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  p="2"
                  ml="3vw"
                  fontSize="16px"
                  color="textPrimary"
                  textDecorationColor="transparent"
                  _active={{
                    transform: 'scale(0.95)',
                  }}
                  _hover={{
                    color: 'secondary',
                    textDecoration: 'underline',
                    transition: 'ease-in-out 0.1s',
                  }}
                >
                  {'Projects'}
                </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  p="2"
                  ml="3vw"
                  fontSize="16px"
                  color="textPrimary"
                  textDecorationColor="transparent"
                  _active={{
                    transform: 'scale(0.95)',
                  }}
                  _hover={{
                    color: 'secondary',
                    textDecoration: 'underline',
                    transition: 'ease-in-out 0.1s',
                  }}
                >
                  {'Blog'}
                </Button>
              </NextLink>
              <NextLink href="/contact" passHref>
                <Button
                  p="4"
                  ml="3vw"
                  fontSize="15px"
                  color="textPrimary"
                  textDecorationColor="transparent"
                  bgGradient="linear(to-r,#f6909d 20%,#ffc988)"
                  // backgroundColor="#f6909d"
                  _active={{
                    transform: 'scale(0.95)',
                  }}
                  _hover={{
                    color: 'button3',
                    backgroundColor: 'textPrimary',
                  }}
                >
                  {'Contact Me'}
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
