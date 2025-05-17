import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header';
import Catalog from './pages/Catalog/Catalog';
import CarDetailsPage from './pages/CarDetailsPage/CarDetailsPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CarDetailsPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
