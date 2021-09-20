import { Box, Button, Heading, Text, useColorModeValue, Flex } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import NextImage from "next/image"
import { useMediaQuery } from 'react-responsive'
import "animate.css"
import Typewriter from 'typewriter-effect';

import { seo, data } from "config"

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400")

  const isOdd = (num) => num % 2

  const title = `Home | ${seo.title}`
  const description = seo.description
  
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

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
        <Box>
          {isTabletOrMobile && 
            <Heading fontSize={["3xl", "4xl"]} fontWeight="700" className="animate__animated animate__flipInY animate__delay-1s">
              <Text as="span" color={color}>
                We want to
              </Text>{" "}
              know more about what is happening on campus.
            </Heading>
          }
          {isDesktopOrLaptop && 
            <Heading fontSize={["3xl", "4xl"]} fontWeight="700" className="animate__animated animate__flipInY animate__delay-1s">
            <Flex direction='row'>
              <Text as="span" color={color}>We want to&nbsp;</Text>
              <Text
                as='span'
                fontSize={["3xl", "4xl"]}
                variant='primary'
                fontWeight='semibold'
                _hover={{ fontWeight: 'bold' }}
              >
                <Typewriter
                  options={{
                    delay: 50,
                    skipAddStyles: true,
                    loop: true,
                    deleteSpeed: 20,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2000)
                      .typeString('learn more about U of A projects.')
                      .pauseFor(2000)
                      .deleteChars(38)
                      .typeString('know more about U of A students.')
                      .pauseFor(2000)
                      .deleteChars(38)
                      .typeString('know more about U of A academia.')
                      .pauseFor(2000)
                      .deleteChars(38)
                      .start();
                  }}
                />
              </Text>
            </Flex>
            </Heading>
          }
          <Text py="4">
            Learn about{" "}
            <Text as="span" fontWeight="600">
              your professors
            </Text>{" "}
            and{" "}
            <Text as="span" fontWeight="600">
              clubs
            </Text>{" "}
            from the comfort of your computer.
          </Text>
          <Button
            colorScheme="telegram"
            variant="ghost"
            size="lg"
            fontSize="20px"
          >
            Get in touch
          </Button>
        </Box>
      </Box>

      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign={{ base: "center", lg: "left" }}
        py="4"
      >
        {data.map((item, index) => (
          <Box
            d={{ lg: "flex" }}
            justifyContent={{ lg: "center" }}
            alignItems={{ lg: "center" }}
            flexDir={{ lg: isOdd(index) == 1 && "row-reverse" }}
            key={index}
          >
            <Box
              w={{ base: "80%", lg: "35%" }}
              mx={{ base: "auto", lg: "0" }}
              pl={{ lg: isOdd(index) == 1 && "10" }}
              pr={{ lg: isOdd(index) == 0 && "10" }}
            >
              <NextImage
                src={item.image}
                width="500"
                height="500"
                alt={item.title}
                placeholder="blur"
                blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
              />
            </Box>

            <Box w={{ lg: "50%" }}>
              <Heading as="h1">{item.title}</Heading>
              <Text py="4">{item.description}</Text>
            </Box>
          </Box>
        ))}
        <Heading as="h1" fontSize="2xl" fontWeight="500" py="2">
          Come and Learn something new!{" "}
          <span role="img" aria-label="hand">
            👋🏻
          </span>
        </Heading>
      </Box>
    </>
  )
}

export default Home
