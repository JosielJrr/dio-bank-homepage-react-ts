import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from './components/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextProvider } from './components/AppContext';
import { MainRoutes } from './routes';


function App() {
  return (
    <Router>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </Router>
  );
}

export default App;

