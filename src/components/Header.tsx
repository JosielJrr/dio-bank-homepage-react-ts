import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "./AppContext"
import { useNavigate } from "react-router-dom"


export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    setIsLoggedIn(false)
    navigate("/")
  }

  return (
    <Flex backgroundColor="#f47b20" padding="15px">
      <Box>
        <Text fontSize="3xl" fontWeight="bold" color="#FFFFFF"> Dio Bank</Text>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button
              onClick={() => logout()}  colorScheme="purple" color="#FFFFFF" >
              Sair
            </Button>
          </>
        )
      }
    </Flex>

  )
}
