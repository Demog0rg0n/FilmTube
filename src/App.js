import './index.scss';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Header from './components/header/Header';
import Catalog from './pages/Catalog';
import CatalogItemPage from './pages/CatalogItemPage';
import Menu from './components/Menu';
import Popup from './components/Popup';
import WishList from './components/WishList';
import { useAppDispatch } from './redux/store';
import { setUser } from './redux/slices/userSlice';
import axios from 'axios';
import Viewed from './pages/Viewed';

function App() {
  const dispatch = useAppDispatch();

  async function getUserById() {
    const id = document.cookie.split('=')[1];

    if (id) {
      const { data } = await axios.get(`http://localhost:5000/api/user/${id}`);

      if (data) {
        dispatch(setUser(data));
      }
    }
  }

  getUserById();

  return (
    <div className="App">
      <Header />
      <Popup />
      <Menu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog/:type" element={<Catalog />} />
        <Route path="/catalog/:type/:id" element={<CatalogItemPage />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="/viewed" element={<Viewed />} />
      </Routes>
    </div>
  );
}

export default App;
