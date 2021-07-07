import {
  SlideFade,
  ScaleFade,
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

const Hero = () => {
  const [isLarger800] = useMediaQuery('(min-width: 800px)')
  const [isLarger600] = useMediaQuery('(min-width: 600px)')

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
              src=""
              filter="invert(0)"
              w={{ base: '5em', md: '10em', lg: '14em' }}
              position="absolute"
              bottom={{ base: '0', md: '-15' }}
              right={{ base: '-2', md: '-10' }}
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
            A Passionate Full Stack Developer{' '}
            {isLarger800
              ? 'and Co-Founder of\nCedar & Gold Creative.'
              : 'and Co-Founder of Cedar & Gold Creative.'}
          </Heading>
        </SlideFade>

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.9 } }}
        >
          <Text color="textSecondary">
            <Box
              color="complement"
              as="span"
            >
              11th Doctor -{` `}
            </Box>
            <Box display="inline">
              “I am and always will be the optimist. The hoper of far-flung
              hopes, <br />
              and the dreamer of improbable dreams.”{' '}
            </Box>
          </Text>
        </SlideFade>

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 1.0 } }}
        >
          <Stack isInline spacing={4}>
            <Link href="https://github.com/jamesindeed" isExternal>
              <Button
                leftIcon={<FaGithub color="#fff772" />}
                transition="0.3s"
                size={isLarger800 ? 'md' : 'sm'}
                fontSize={isLarger800 ? 'xl' : '3xl'}
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
                leftIcon={<FaLinkedin color="#66c9ff" />}
                transition="0.3s"
                size={isLarger800 ? 'md' : 'sm'}
                fontSize={isLarger800 ? 'xl' : '3xl'}
                color="textSecondary"
              >
                LinkedIn
              </Button>
            </Link>
            <Link href="mailto:jamesstroughton@gmail.com" isExternal>
              <Button
                leftIcon={<FaEnvelope color="	#f6909d" />}
                transition="0.3s"
                size={isLarger800 ? 'md' : 'sm'}
                fontSize={isLarger800 ? 'xl' : '3xl'}
                color="textSecondary"
              >
                Email
              </Button>
            </Link>
          </Stack>
        </SlideFade>
      </Stack>
    </>
  )
}

export default Hero
