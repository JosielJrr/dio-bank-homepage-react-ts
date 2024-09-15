import { Box, Center, ChakraProvider, Input } from "@chakra-ui/react"
import { login } from "../services/login"
import { ButtonLogin } from "./Button"



export const Card = () => {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' minWidth="100vw" backgroundColor='#9413dc' padding='25px'>
        <Center>
          <Box width="70%" backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' marginTop="80px">
            <Center padding="15px">
              <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" type="email" marginBottom="10px" />
            <Input placeholder="password" type="password" />
            <ButtonLogin onClick={login}>
              Enviar
            </ButtonLogin>
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  )
}