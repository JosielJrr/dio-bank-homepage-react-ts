import { Box, Center, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { ButtonLogin } from "../components/Button";
import { login } from "../services/login";
import { useContext, useState } from "react";
import { AppContext } from "../components/AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../services/storage";

export const Home = () => {
    const [email, setEmail] = useState<string>("");
    const { setIsLoggedIn } = useContext(AppContext);  // Função para atualizar o estado de login
    const navigate = useNavigate();

    // Função para validar o usuário ao tentar fazer login
    const validateUser = async (email: string) => {
        const loggedIn = await login(email);  // Chama a função de login com o email fornecido

        if (!loggedIn) {
            return alert("Email inválido");
        }

        setIsLoggedIn(true);  // Atualiza o estado para indicar que o usuário está logado
        changeLocalStorage({ login: true }); // Atualiza o localStorage para refletir o estado de login
        navigate("/conta/1");  // Redireciona para a página da conta do usuário
    };

    return (
        <Box padding="25px">
            <Card>
                <Center padding="15px">
                    <h1>Faça o login</h1>
                </Center>
                <Input
                    placeholder="email"
                    type="email"
                    marginBottom="10px"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}  // Atualiza o estado do email conforme o usuário digita
                />
                <Input
                    placeholder="password"
                    type="password"
                />
                <ButtonLogin onClick={() => validateUser(email)}>
                    Enviar
                </ButtonLogin>
            </Card>
        </Box>
    );
};
