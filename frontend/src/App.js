

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (

      <Router>
      <Header></Header>

      <main>
        <Container>
          <Routes>
          <Route path="/" element={<HomeScreen/>} exact />
          <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>

      <Footer></Footer>
    </Router>


  );
};

export default App;
