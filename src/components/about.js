import React from 'react'
import {
  SimpleGrid,
  ScaleFade,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  chakra,
  useMediaQuery,
  SlideFade,
} from '@chakra-ui/react'
import SlideUpWhenVisible from '../hooks/slideUpWhenVisible'
import { css, keyframes } from '@emotion/react'

const About = () => {
  const [isLarger600] = useMediaQuery('(min-width: 600px)')

  const MoveInOut = keyframes`
    0% {
        transform: scale(1.0);
    }
    100% {
        transform: scale(1.1);
    }
    
  `

  return (
    <>
      <SlideUpWhenVisible>
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 1.2 } }}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={8}
            my={{ base: '2em', md: '6em', xl: '12em' }}
          >
            <Stack spacing={4}>
              <Heading color="textPrimary" fontSize="display2">
                About.
              </Heading>
              <Text
                color="textSecondary"
                // fontSize={{ base: '14px', md: '16px' }}
                fontSize="display3"
                whiteSpace="pre-line"
              >
                lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit
                amet, consectetur lorem ipsum dolor sit amet, consectetur
                <br />
                <br />
                lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit
                amet, consectetur lorem ipsum dolor sit amet, consectetur. lorem
                ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
                consectetur lorem ipsum dolor sit amet, consectetur
                <br />
                <br />
                lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit
                amet, consectetur lorem ipsum dolor sit amet, consectetur. lorem
                ipsum dolor sit amet.
              </Text>
            </Stack>

            <Flex
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              <Box
              // maxW={{ base: '20rem', lg: '22rem' }}
              // maxH={{ base: '20rem', lg: '22rem' }}
              >
                {isLarger600 ? (
                  <Image
                    src="https://image.flaticon.com/icons/png/512/1196/1196517.png"
                    zIndex={0}
                    position="absolute"
                    top={0}
                    right={0}
                    w={{ base: '100px', lg: '140px', xl: '200px' }}
                    alt="sun"
                    css={css`
                      animation: ${MoveInOut} 1s ease infinite alternate;
                    `}
                  />
                ) : null}

                <Image
                  src="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Blank&hatColor=PastelRed&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Light"
                  w={{ base: '22rem', xl: '30rem' }}
                  justifyContent="flex-end"
                  alt="James Troughton"
                />
              </Box>
            </Flex>
          </SimpleGrid>
        </SlideFade>
      </SlideUpWhenVisible>
    </>
  )
}

export default About
