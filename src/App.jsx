
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import Navbar from './Components/Navbar';
import SignUp from './Pages/SignUp';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <div className="w-full h-screen bg-[white]">
      <Router>
        <AuthProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/men" element={<ShopCategory category="men"/>}/>
          <Route path="/women" element={<ShopCategory category="women"/>}/>
          <Route path="/kid" element={<ShopCategory category="kid"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        </AuthProvider>
      </Router>
      
    </div>
  );
}

export default App;
