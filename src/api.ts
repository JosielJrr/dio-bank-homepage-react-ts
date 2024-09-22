const conta = {
    email: "Josiel@email.com",
    password: "123456",
    name: "Josiel",
    balance: 2000.00,
    id: "1"
}

// Simula uma API que retorna os dados da conta após 3 segundos
export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta);  // Resolve a promessa com os dados da conta
    }, 3000);  // Delay de 3 segundos para simular a requisição
});