import { chakra } from "@chakra-ui/react"
import NextLink from "next/link"
import NextImage from "next/image"

const Logo = () => (
  <>
    <NextLink href="/" passHref>
      <chakra.a fontSize="2rem" fontWeight="700">
        <NextImage
          src="/logo.png"
          width="150"
          height="50"
          alt="logo"
          placeholder="blur"
          blurDataURL="L5I~of#i004mgjw]-4XA00?wL#xu"
          priority
        />
      </chakra.a>
    </NextLink>
  </>
)

export default Logo
