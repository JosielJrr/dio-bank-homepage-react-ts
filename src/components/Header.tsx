import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../services/storage";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false });  // Altera o estado de login no localStorage
    setIsLoggedIn(false);  // Atualiza o estado de login no contexto
    navigate("/");  // Redireciona para a página inicial
  };

  return (
    <Flex backgroundColor="#f47b20" padding="15px">
      <Box>
        <Text fontSize="3xl" fontWeight="bold" color="#FFFFFF">Dio Bank</Text>
      </Box>
      {
        isLoggedIn && (  // Renderiza o botão "Sair" apenas se o usuário estiver logado
          <>
            <Spacer />
            <Button
              onClick={() => logout()} colorScheme="purple" color="#FFFFFF">
              Sair
            </Button>
          </>
        )
      }
    </Flex>
  );
};
