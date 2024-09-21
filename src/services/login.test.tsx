import { login } from "./login"

describe("login", () => {

    const mockEmail = "Josiel@email.com"
    it("Deve exibir um alert com boas vindas caso o email seja válido", async () => {
        const response = await login(mockEmail);
        expect(response).toBeTruthy();
    });

    it("Deve exibir erro caso o email seja inválido", async () => {
        const response = await login("email@invalido.com")
        expect(response).toBeFalsy();
    });

});

