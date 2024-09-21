import { Box, Center } from "@chakra-ui/react"

export const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <Center>
            <Box width="70%" backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' marginTop="80px">
                {children}
            </Box>
        </Center>
    )
}