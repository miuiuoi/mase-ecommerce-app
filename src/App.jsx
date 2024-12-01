import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import SignUp from './Pages/SignUp';
// import AuthProvider from './Context/AuthProvider';
import { useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import Cart from './Pages/Cart';

function App() {
  return (
    <div className="h-screen w-full bg-white">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/men"
          element={<ShopCategory category="men" banner={men_banner} />}
        />
        <Route
          path="/women"
          element={<ShopCategory category="women" banner={women_banner} />}
        />
        <Route
          path="/kid"
          element={<ShopCategory category="kid" banner={kid_banner} />}
        />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
