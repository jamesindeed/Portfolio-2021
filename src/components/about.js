import React from 'react'
import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  chakra,
  useMediaQuery,
  Slide,
} from '@chakra-ui/react'

const About = () => {
const [isLarger600] = useMediaQuery('(min-width: 600px)')

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <Stack spacing={4}>
          <Heading color="textPrimary" fontSize="display2">
            {'About.'}
          </Heading>
          <Text
            color="textSecondary"
            fontSize={{ base: '14px', md: '16px' }}
            whiteSpace="pre-line"
          >
            lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
            consectetur lorem ipsum dolor sit amet, consectetur
            <br />
            <br />
            lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
            consectetur lorem ipsum dolor sit amet, consectetur. lorem ipsum
            dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur
            lorem ipsum dolor sit amet, consectetur
            <br />
            <br />
            lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
            consectetur lorem ipsum dolor sit amet, consectetur. lorem ipsum
            dolor sit amet.
          </Text>
        </Stack>
        <Flex alignItems="center" justifyContent="center" position="relative">
          <Box
            maxW={{ base: '20rem', lg: '22rem' }}
            maxH={{ base: '20rem', lg: '22rem' }}
          >
            {isLarger600 ? (
              <Image
                src="https://img-premium.flaticon.com/png/512/733/premium/733740.png?token=exp=1625639689~hmac=8ce4aab3982a107d5870763d826fcc2b"
                zIndex={99}
                position="absolute"
                top={0}
                right={0}
                w={{ base: '100px', lg: '150px' }}
                alt=""
              />
            ) : null}

            <Image
              src="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Blank&hatColor=PastelRed&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Light"
              w="20rem"
              justifyContent="flex-end"
              alt="James Troughton"
            />
          </Box>
        </Flex>
      </SimpleGrid>
    </>
  )
}

export default About
