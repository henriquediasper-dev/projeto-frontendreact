import { AppStyle } from "./AppStyle";
import { Filters } from "./Components/Filters/Filters";
import { Home } from "./Components/ProductList/Home/Home";
import { Cart } from "./Components/ShoppingCart/Cart/Cart";
import { productList } from "./Components/Assents/productsList";
import GlobalStyle from "./GlobalStyle";
import { useState } from "react";

function App() {

  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchFilter, setSearchFilter] = useState("")
  const [cart, setCart] = useState("")
  const [amount, setAmount] = useState("")


  return (
    <AppStyle>
      <GlobalStyle />
      <Filters
       minFilter={minFilter} 
       maxFilter={maxFilter}
       searchFilter={searchFilter}
       setMinFilter={setMinFilter}
       setMaxFilter={setMaxFilter}
       setSearchFilter={setSearchFilter}/>
      <Home productList={productList}
      cart={cart}
      amount={amount}
      setCart={setCart}
      setAmount={setAmount}/>
      <Cart cart={cart}
      amount={amount}
      setCart={setCart}
      setAmount={setAmount} />
    </AppStyle>
  );
}

export default App;
