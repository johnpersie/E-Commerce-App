import Home from "./pages/home";
import Login from "./pages/login";
import Product from "./pages/product";
import ProductList from "./pages/productList";
import Register from "./pages/register";
import { GlobalStyle } from "./reusableComponents/globalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Home />
      <ProductList />
      <Product />
      <Register />
      <Login />
    </div>
  );
}

export default App;
