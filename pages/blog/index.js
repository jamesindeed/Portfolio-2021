import React from 'react'
import Layout from '../../src/components/layout'
import { Stack, Box, Text, Heading, Link } from '@chakra-ui/react'
import { css, jsx, keyframes } from '@emotion/react'
import NextLink from 'next/link'

const Tipsy = keyframes`
    0 {
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }
  100% {
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  }  
`

const Blog = () => {
  return (
    <>
      <Layout>
        <Stack
          spacing={10}
          justifyContent="center"
          alignItems="center"
          h="90vh"
        >
          <Text
            href="https://github.com/jamesindeed"
            target="_blank"
            css={css`
              color: #fffbf1;
              text-shadow: 0 5px 10px #2e2e31, 0px 30px 40px #2e2e31;
              font-size: 6em;
              font-weight: bold;
              text-decoration: none;
              letter-spacing: -3px;
              margin: 0;
              position: absolute;
              top: 40%;
              left: 50%;
              transform: translateX(-50%) translateY(-50%);

              &:before,
              &:after {
                content: '';
                padding: 0.9em 0.4em;
                position: absolute;
                left: 50%;
                width: 100%;
                top: 50%;
                display: block;
                border: 15px solid red;
                transform: translateX(-50%) translateY(-50%) rotate(0deg);
                animation: 10s infinite alternate ease-in-out ${Tipsy};
              }

              &:before {
                border-color: #f6909d #66c9ff rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
                z-index: -1;
              }

              &:after {
                border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #e5cb60 #d9524a;
                /* box-shadow: 25px 25px 25px #1d2626; */
              }

              @media only screen and (max-width: 1200px) {
                  font-size: 3em;
              }
              @media only screen and (max-width: 768px) {
                  font-size: 2em;
              }
            `}
          >
            {'Coming Soon.'}
          </Text>
        </Stack>
      </Layout>
    </>
  )
}

export default Blog
