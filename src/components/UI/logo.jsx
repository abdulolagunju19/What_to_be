import { chakra } from "@chakra-ui/react"
import NextLink from "next/link"
import NextImage from "next/image"

const Logo = () => (
  <>
    <NextLink href="/" passHref>
      <chakra.a fontSize="2rem" fontWeight="700">
        What it's Like to Be
      </chakra.a>
    </NextLink>
  </>
)

export default Logo
