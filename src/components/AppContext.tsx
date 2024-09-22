import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "../services/storage";

// Interface que define o formato do contexto
interface IAppContext {
    user: string;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const storage = getAllLocalStorage();

    useEffect(() => {
        if (storage) {
            // Verifica se há dados no localStorage e atualiza o estado de login
            const { login } = JSON.parse(storage);
            setIsLoggedIn(login);
        }
    }, []); // Executa apenas quando o componente é montado

    const user = "Josiel";

    // Provedor do contexto que passa os valores e funções para os componentes filhos
    return (
        <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AppContext.Provider>
    );
};
