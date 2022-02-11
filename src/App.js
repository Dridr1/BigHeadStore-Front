
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/index';
import Checkout from './pages/Checkout/index';
import { GlobalStyle } from './styles/style';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';


function App() {
  return ( 
    <AuthProvider>
      <CartProvider>  
      <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/cart" element={ <Cart/> } />
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
