import { Box, Button, Heading, Text, useColorModeValue, Flex } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import NextImage from "next/image"
import { useRouter } from 'next/router'
import "animate.css"
import {
  OrderedList,
  ListItem
} from '@chakra-ui/react'

import { seo, data } from "config"

const Upcoming = () => {
  const color = useColorModeValue("telegram.500", "telegram.400")

  const isOdd = (num) => num % 2

  const title = `Upcoming | ${seo.title}`
  const description = seo.description
  const router = useRouter()

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={seo.canonical}
        openGraph={{
          title,
          description,
          images: [
            {
              url: `${seo.canonical}bighead.svg`,
              width: "350px",
              height: "350px",
              alt: "avatar bigheads",
            },
          ],
        }}
      />

      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        py="4"
      >
        <NextImage
          src="/1200px-University_of_Alberta_seal.svg.png"
          width="350"
          height="350"
          alt="avatar bigheads"
          placeholder="blur"
          blurDataURL="L5I~of#i004mgjw]-4XA00?wL#xu"
          priority
        />
          <Heading fontSize={["3xl", "4xl"]} fontWeight="700" className="animate__animated animate__flipInY animate__delay-1s">
            <Flex direction='row'>
              <Text
                as='span'
                fontSize={["3xl", "4xl"]}
                variant='primary'
                fontWeight='semibold'
                _hover={{ fontWeight: 'bold' }}
              >
                  Upcoming Interviews:
              </Text>
            </Flex>
          </Heading>
          <br/>
          <OrderedList>
            <ListItem>Upcoming Interviews will be posted here :)</ListItem>
          </OrderedList>
          <br/>
          <Button
            colorScheme="telegram"
            variant="ghost"
            size="lg"
            fontSize="20px"
            onClick={() => router.push('mailto:olagunju@ualberta.ca')}
          >
            Get in touch!
          </Button>
          <Text>Images from StorySet</Text>
      </Box>
    </>
  )
}

export default Upcoming
