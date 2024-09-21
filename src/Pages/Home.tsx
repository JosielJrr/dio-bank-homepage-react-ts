import { Box, Center, Input } from "@chakra-ui/react"
import { Card } from "../components/Card"
import { ButtonLogin } from "../components/Button"
import { login } from "../services/login"
import { useContext, useState } from "react"
import { AppContext } from "../components/AppContext"
import { useNavigate } from "react-router-dom"

export const Home = () => {
    const [email, setEmail] = useState<string>("");
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string) => {
        const loggedIn = await login(email)

        if (!loggedIn) {
            alert("Email inválido")
        }

        setIsLoggedIn(true)
        navigate("/conta/1")
    }

    return (
        <Box padding="25px">
            <Card>
                <Center padding="15px">
                    <h1>Faça o login</h1>
                </Center>
                <Input placeholder="email" type="email" marginBottom="10px" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="password" type="password" />
                <ButtonLogin onClick={() => validateUser(email)}>
                    Enviar
                </ButtonLogin>
            </Card>
        </Box>
    )
}