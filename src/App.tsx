import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Conta } from './Pages/Conta';
import { ContaInfo } from './Pages/ContaInfo';
import { AppContextProvider } from './components/AppContext';


function App() {
  return (
    <Router>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/conta/:id' element={<Conta />} />
              <Route path='/infoconta' element={<ContaInfo />} />
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </Router>
  );
}

export default App;

