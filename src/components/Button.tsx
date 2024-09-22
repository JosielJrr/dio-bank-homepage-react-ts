import { Center, Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

// Interface que define os tipos esperados para as props
interface IButton {
    onClick: MouseEventHandler;
    children: React.ReactNode;
}

export const ButtonLogin = ({ onClick, children }: IButton) => {
    return (
        <Center>
            <Button onClick={onClick} backgroundColor="#d85d7f" colorScheme="purple" color="#FFFFFF" width="50%" marginTop="15px">
                {children}
            </Button>
        </Center>
    );
};
