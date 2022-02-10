import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext.js";
import Cart from "./pages/Cart/index.js";
import Checkout from "./pages/Checkout/index.js";
import { GlobalStyle } from "./styles/style.js";

function App() {
  return ( 
    <>
      <CartProvider>  
        <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
        );
}

export default App;
