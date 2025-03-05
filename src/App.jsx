import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Productos from "./components/Productos";

function App() {
  const [cartCount, setCartCount] = useState(0); 
  return (
    <Router>
      <Navbar cartCount={cartCount} />
      <Routes>        
        <Route path="/" element={<ItemListContainer mensaje="¡Bienvenido a nuestra tienda!" setCartCount={setCartCount} />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/about" element={<About />} />        
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:categoria" element={<Productos />} /> 
      </Routes>
    </Router>
  );
}

export default App;
