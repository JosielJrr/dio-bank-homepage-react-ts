import { login } from "./login"


describe("login", () => {

    const mockAlert = vi.fn();
    global.alert = mockAlert;

    const mockEmail = "Josiel@email.com";

    it("Deve exibir um alert com boas vindas caso o email seja válido", async () => {
        await login(mockEmail);
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
        expect(mockAlert).toHaveBeenCalledWith(`Boas vindas ${mockEmail}!`);
    });

    it("Não deve exibir mensagem de boas vindas sem email", async () => {
        await login(mockEmail);
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
        expect(mockAlert).not.toHaveBeenCalledWith("Boas vindas!");
    });

    it("Deve exibir erro caso o email seja inválido", async () => {
        await login("email@invalido.com");
        expect(mockSetIsLoggedIn).not.toHaveBeenCalled();
        expect(mockAlert).toHaveBeenCalledWith("E-mail inválido");
    });

});

