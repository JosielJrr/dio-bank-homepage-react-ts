import { Box, Heading } from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "./AppContext"


export const Header = () => {

  const user = useContext(AppContext)
  console.log("Header: ", user)

  return (
    <Heading as='h3' size='lg'>
      <Box bg="#f47b20" color="#FFFFFF" padding="25px" width="100vw" height="10vh">
        Dio Bank
      </Box>
    </Heading>
  )
}
