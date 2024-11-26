
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="w-full h-screen bg-[white]">
      <Router>
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
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
