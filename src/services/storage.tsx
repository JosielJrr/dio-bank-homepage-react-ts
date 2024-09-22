interface IDioBank {
    login: boolean; 
}

const dioBank = {
    login: false,  // Objeto inicial representando o estado de login
};

// Função para obter o item "dioBank" do localStorage
export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem("dioBank");
};

// Função para criar o localStorage com o objeto dioBank inicial
export const createLocalStorage = (): void => {
    localStorage.setItem("dioBank", JSON.stringify(dioBank));  // Armazena o objeto no localStorage
};

// Função para alterar o localStorage com um novo estado de dioBank
export const changeLocalStorage = (dioBank: IDioBank): void => {
    localStorage.setItem("dioBank", JSON.stringify(dioBank));  // Atualiza o valor armazenado no localStorage
};
