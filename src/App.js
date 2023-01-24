import './index.scss';

import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Header from './components/header/Header';
import Catalog from './pages/Catalog';
import CatalogItemPage from './pages/CatalogItemPage';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog/:type" element={<Catalog />} />
        <Route path="/catalog/:type/:id" element={<CatalogItemPage />} />
      </Routes>
    </div>
  );
}

export default App;
