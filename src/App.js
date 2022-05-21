import Home from "./pages/home";
import Product from "./pages/product";
import ProductList from "./pages/productList";
import { GlobalStyle } from "./reusableComponents/globalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Home />
      <ProductList />
      <Product />
    </div>
  );
}

export default App;
