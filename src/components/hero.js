import {
  SlideFade,
  useMediaQuery,
  Stack,
  Image,
  Box,
  Text,
  Heading,
  Link,
  Button,
} from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Wave } from '../assets/wave.png'

const Hero = () => {
  const [isLarger800] = useMediaQuery('(min-width: 800px)')

  return (
    <>
      <Stack spacing={10} justifyContent="flex-start" alignItems="flex-start">
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}
        >
          <Box position="relative">
            <Image
              // src="https://svgsilh.com/svg/1254501-f5f9e9.svg"
              filter="invert(0.3)"
              w={{ base: '5em', md: '10em', lg: '14em' }}
              position="absolute"
              top={{ base: '0', md: '-15' }}
              left={{ base: '-2', md: '-10' }}
              display="flex"
              zIndex={0}
              alt=""
            ></Image>
            <Text
              color="textPrimary"
              fontSize="display2"
              fontWeight="medium"
              position="relative"
              zIndex={1}
            >
              Hello! I'm-
            </Text>
          </Box>
          <Heading
            fontSize="display"
            lineHeight={'95%'}
            color="textPrimary"
            letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
            position="relative"
            zIndex={1}
          >
            James Troughton.
          </Heading>
        </SlideFade>

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.8 } }}
        >
          <Heading
            color="textPrimary"
            fontSize="display2"
            fontWeight="medium"
            whiteSpace="pre-wrap"
            letterSpacing="-1.6px"
          >
            <Box color="secondary" as="span">
              Software Engineer.
            </Box>{' '}
            A Passionate Developer and Co-Founder of Cedar & Gold Creative.
          </Heading>
        </SlideFade>
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 1.0 } }}
        >
          <Stack isInline spacing={4}>
            <Link href="https://github.com/jamesindeed" isExternal>
              <Button
                leftIcon={<FaGithub color="#7cffcb" />}
                transition="0.3s"
                position="static"
                size={isLarger800 ? 'md' : 'sm'}
                fontSize={isLarger800 ? '0.8em' : '0.6em'}
                color="textSecondary"
              >
                Github
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/james-troughton-58403a19a/"
              isExternal
            >
              <Button
                leftIcon={<FaLinkedin color="#7cffcb" />}
                transition="0.3s"
                position="static"
                size={isLarger800 ? 'md' : 'sm'}
                fontSize={isLarger800 ? '0.8em' : '0.6em'}
                color="textSecondary"
              >
                LinkedIn
              </Button>
            </Link>
            <Link href="mailto:jamesstroughton@gmail.com" isExternal>
              <Button
                leftIcon={<FaEnvelope color="#7cffcb" />}
                transition="0.3s"
                position="static"
                size={isLarger800 ? 'md' : 'sm'}
                fontSize={isLarger800 ? '0.8em' : '0.6em'}
                color="textSecondary"
              >
                Contact Me
              </Button>
            </Link>
          </Stack>
        </SlideFade>
      </Stack>
    </>
  )
}

export default Hero
