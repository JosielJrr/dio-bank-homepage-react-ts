import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { CardInfo } from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { api } from "../api";

interface UserData {
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string;
}

export const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>(null);  // Estado para armazenar dados do usuário

    const { id } = useParams();  // Pega o parâmetro "id" da URL
    const navigate = useNavigate();

    const { isLoggedIn } = useContext(AppContext);  // Verifica se o usuário está logado

    // Se o usuário não estiver logado, redireciona para a página inicial
    !isLoggedIn && navigate("/");

    useEffect(() => {
        const getData = async () => {
            const data: any = await api;  // Faz a requisição simulada à API para obter os dados do usuário
            setUserData(data);
        };

        getData();  // Chama a função ao montar o componente
    }, []);

    const actualData = new Date();  // Pega a data e hora atuais
    console.log(actualData);

    // Se os dados do usuário existem e o id da URL não for o mesmo do usuário, redireciona para a página inicial
    if (userData && id !== userData.id) {
        navigate("/");
    }

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === null || userData === undefined ?  // Exibe o spinner enquanto os dados não carregam
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
    );
};
