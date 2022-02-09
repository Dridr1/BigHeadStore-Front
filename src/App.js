import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/index";
import { GlobalStyle } from "./styles/style";

function App() {
  return ( 
    <>
      <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/cart" element={Cart}></Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
