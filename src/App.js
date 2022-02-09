import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart/index.js";
import { GlobalStyle } from "./styles/style.js";

function App() {
  return ( 
    <>  
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </>
        );
}

export default App;
