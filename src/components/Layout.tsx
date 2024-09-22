import { Box } from "@chakra-ui/react";
import { Header } from "./Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box minHeight='100vh' minWidth="100vw" backgroundColor='#9413dc'>
      <Header />
      {children}
    </Box>
  )
}