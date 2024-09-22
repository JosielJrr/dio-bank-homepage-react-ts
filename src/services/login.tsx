import { api } from "../api"; 

export const login = async (email: string): Promise<boolean> => {
    const data: any = await api;  // Obtém os dados da API (simulação)

    if (email !== data.email) {
        return false;  // Retorna false se o email for inválido
    }

    return true;  // Retorna true se o email for válido
};
