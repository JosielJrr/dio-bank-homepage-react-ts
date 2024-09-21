import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { CardInfo } from "../components/CardInfo"
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { api } from "../api";


interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}


export const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>(); 

    const { id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)
    console.log("Conta: ", isLoggedIn)

    !isLoggedIn && navigate("/")

    useEffect(() => {
        const getData = async () => {
            const data = await api; // Recebe o retorno da API como 'unknown' (ou o tipo real da API)

            // Verifica se os dados recebidos são do tipo 'UserData'
            if (typeof data === "object" && data !== null && "email" in data && "password" in data && "name" in data && "balance" in data && "id" in data) {
                setUserData(data as UserData); // Faz um type assertion
            } else {
                console.error("Dados inválidos", data);
                setUserData(null);
            }
        };

        getData();
    }, []);

    const actualData = new Date
    console.log(actualData)

    if (userData && id !== userData.id) {
        navigate("/")
    }

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === null || userData === undefined ?
                        (
                            <Center>
                                <Spinner size="xl" color="white" />
                            </Center>
                        ) :
                        (
                            <>
                                <CardInfo mainContent={`Boas vindas ${userData.name}!`} content={`${actualData.getDay()}/
                                ${actualData.getMonth()}/
                                ${actualData.getFullYear()} -
                                ${actualData.getHours()}: 
                                ${actualData.getMinutes()}`} />
                                <CardInfo mainContent="Saldo:" content={`R$: ${userData.balance}`} />
                            </>
                        )
                }
            </SimpleGrid>
        </Center>

    )
}