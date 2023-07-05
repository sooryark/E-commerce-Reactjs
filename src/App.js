import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import AboutPage from "./About";
import Cart from "./Cart";
import ProductPage from "./ProductPage";


function App() {
  return (
    <>
   
    <Router>
    <Header/>
      <Routes>
      <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="productpage/:id" element={<ProductPage/>}/>
      </Route>
      </Routes>
      <Footer></Footer>
    </Router>
    
    </>
  );
}

export default App;
