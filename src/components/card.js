import {
  TagLeftIcon,
  Tag,
  Text,
  Stack,
  Divider,
  TagLabel,
  Link,
  Image,
  Box,
  Heading,
} from '@chakra-ui/react'
import {
  FaReact,
  FaPython,
  FaPepperHot,
  FaJs,
  FaSass,
  FaCode,
  FaGithub,
  FaExternalLinkAlt,
  FaLaravel,
  FaBootstrap,
  FaDatabase,
} from 'react-icons/fa'
import useMediaQuery from '../hooks/useMediaQuery'

export default function Cards({
  imageURL,
  title,
  desc,
  githubLink,
  deployLink,
  tag,
}) {
  const getTag = (tag) => {
    let values = []
    if (tag == 'React') {
      values[0] = 'blue'
      values[1] = FaReact
    } else if (tag == 'Python') {
      values[0] = 'orange'
      values[1] = FaPython
    } else if (tag == 'Javascript') {
      values[0] = 'yellow'
      values[1] = FaJs
    } else if (tag == 'Sass') {
      values[0] = 'pink'
      values[1] = FaSass
    } else if (tag == 'Flask') {
      values[0] = 'green'
      values[1] = FaPepperHot
    } else if (tag == 'Laravel') {
      values[0] = 'red'
      values[1] = FaLaravel
    } else if (tag == 'Bootstrap') {
      values[0] = 'purple'
      values[1] = FaBootstrap
    } else if (tag == 'SQL') {
      values[0] = 'blue'
      values[1] = FaDatabase
    } else {
      values[0] = 'gray'
      values[1] = FaCode
    }
    return values
  }
  const isLarger800 = useMediaQuery(800)

  return (
    <Box
      backgroundColor="background"
      boxShadow="0px 0px 3px #8F9094"
      borderRadius="10px"
      // border="0.5px solid #fdfcfa"
      // m="0 10px 0px"
      transition="all 0.3s"
      _hover={{
        boxShadow: '0px 1px 8px #e2e4e2',
      }}
      _active={{
        transform: 'scale(0.98)',
        transition: 'all 0.3',
      }}
    >
      <Box borderRadius="10px 10px 0 0" overflow="hidden" display="flex">
        <Image
          src={imageURL}
          w="100%"
          alt=""
          // borderBottom="0.5px solid #e2e4e2"
        />
      </Box>

      <Stack
        justifyContent="space-between"
        padding={{ base: '10px 15px', md: '20px 25px' }}
      >
        <Stack isInline justifyContent="space-between" alignItems="center">
          <Heading
            fontWeight="600"
            fontSize="display2"
            color="textPrimary"
            _hover={{ color: 'complement' }}
          >
            <Text>{title}</Text>
          </Heading>
          <Stack
            isInline
            justifyContent="flex-end"
            alignItems="center"
            spacing={4}
          >
            {githubLink && (
              <Link
                href={githubLink}
                color="textPrimary"
                _hover={{
                  color: 'complementSecondary',
                }}
                isExternal
              >
                <FaGithub size={15} />
              </Link>
            )}
            {deployLink && (
              <Link href={deployLink} color="textPrimary" isExternal>
                <FaExternalLinkAlt size={15} />
              </Link>
            )}
          </Stack>
        </Stack>

        <Stack py={{ base: '', lg: '2px' }} isInline>
          {tag
            ? tag.map((item) => (
                <Tag
                  key={item}
                  colorScheme={getTag(item)[0]}
                  size={isLarger800 ? 'md' : 'sm'}
                  alignItems="center"
                  p={{ md: '6px', lg: '8px', xl: '10px' }}
                >
                  <TagLeftIcon
                    fontSize={{ base: '10px', lg: '15px' }}
                    as={getTag(item)[1]}
                  ></TagLeftIcon>
                  <TagLabel fontSize="tag">{item}</TagLabel>
                </Tag>
              ))
            : null}
        </Stack>
        <Divider />
        <Text color="textSecondary" fontSize="2xl">
          {desc}
        </Text>
      </Stack>
    </Box>
  )
}
