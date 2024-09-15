import { Box, Heading } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Heading as='h3' size='lg'>
      <Box bg="#f47b20" color="#FFFFFF" padding="25px" width="100vw" height="10vh">
        Dio Bank
      </Box>
    </Heading>
  )
}
