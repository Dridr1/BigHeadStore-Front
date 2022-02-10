import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/index";
import { GlobalStyle } from "./styles/style";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return ( 
    <AuthProvider>
      <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/cart" element={ <Cart/> } />
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
